import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [status, setStatus] = useState('');
  const navigate=useNavigate();

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  

  const handleSubmit = (e) => {

    e.preventDefault();   
    const otpValue = otp.join(''); 
    if (otpValue === '1234') {
      setStatus('success');
    } else {
      setStatus('error');
    }

  };

  function handleclick(){
    navigate('/chaicode.com')
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-blue-600 text-white'>
      <div className='flex justify-center items-center mb-8 mt-6'>
        <h1 className='font-bold text-6xl leading-10' >
    Chai aur Code
       
        </h1>
      </div>
      <div className='bg-white text-black rounded-lg shadow-lg p-8 flex flex-col items-center w-96 mt-8'>
        <h3 className='font-bold text-xl mb-4'>Mobile Phone Verification</h3>
        <p className='text-center mb-4'>Enter the 4-digit verification code that was sent to your phone number.</p>
        <div className='flex space-x-2 mb-4'>
          {otp.map((value, index) => (
            <input
              key={index}
              type='text'
              className={`w-12 h-12 text-center text-2xl border rounded ${status==="success"?'border-green-600': status==="error"?'border-red-600':'border-blue-600'} outline-none`}
              maxLength='1'
              value={value}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>
        <button
          className={`px-6 py-2 rounded font-bold ${status === 'success' ? 'bg-green-600' : status === 'error' ? 'bg-red-600' : 'bg-blue-600'} text-white`}
          onClick={handleSubmit}
        >
          {status === 'success' ? 'Verified' : status === 'error' ? 'Verification Failed' : status==='' ? 'Verify' : 'verifying...'}
        </button>
        <div className='flex mt-4'>
          <p className='pr-1'>Didn't receive code?</p>
          <p className='text-blue-600 cursor-pointer'>Resend</p>
        </div>
      </div>
      <img
        src='https://s3-alpha-sig.figma.com/img/6dbf/e4f9/9eddf1549be82b67d870f4041b254cab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Et6vIZoTixOW93hRDSTMTP5zHiXBScPptDa7wio9Q19Fb3RVeyKyGSdMZNMc8b03m8cZ0ujW0IgAcOHc5a5pATb6wYlKbIcOCU3CVwOpaS5a40VH89QQ~eBtGj5qfiC9d6yfNL4gcOFGfWUKDtlz4flPXQaJAMOUP~rft27nkvk7Cbinif4IiEllm4khAfpzXqTNh48H8JOUsSgdQXBHIkL12OEZd~XdmNdfnl6lLF4M-69ZTRv7nip6jGr6zKiQ6qpV5P~BzFPPLDw0PZWjV~zQmnt8eRGvdRSuyjK9KlUjSNaNyVi8P2eeXixyUAJDCmEVW6CB6SozO0auNevxjQ__'
        className='w-32 h-32 mt-8 ml-[1200px] rounded-md'
        alt='Logo'
        onClick={handleclick}
      />
    </div>
  );
};

export default Otp;
 

// const otp = ['1', '2', '3', '4']; When the handleSubmit function is called, it joins the elements of the otp array into a string like this:

//const otpValue = otp.join(''); This line of code creates a string called otpValue that looks like this:

//'1234'
