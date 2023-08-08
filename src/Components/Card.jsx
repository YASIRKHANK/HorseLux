import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import pic from '../images/elegant.png'
const img = {
    backgroundImage: `url(${pic})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };
const Card = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showReenterPassword, setShowReenterPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleReenterPasswordVisibility = () => {
        setShowReenterPassword(!showReenterPassword);
    };

    return (
        <div style={img} className='p-32 flex justify-center items-center '>
            <div className='border outline-none rounded-2xlx bg-[#000000B2] w-96 h-96 p-6 rounded-2xl'>
                <h1 className='text-white text-center mb-4 text-xl'>Reset Password</h1>
                <p className='text-white'> New Password</p>
                <div className='mb-4 flex items-center '>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='New Password'
                        className='flex-1 border p-1 rounded-full outline-none'
                    />

                    <button
                        type='button'
                        onClick={togglePasswordVisibility}
                        className='focus:outline-none'
                    >
                        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </button>

                </div>
               <p className='text-white'> Re-Enter Password</p> 
                <div className='mb-4 flex items-center'>
                    <input
                        type={showReenterPassword ? 'text' : 'password'}
                        placeholder='Re-enter New Password'
                        className='flex-1 border p-1 rounded-full outline-none'
                    />

                    <button
                        type='button'
                        onClick={toggleReenterPasswordVisibility}
                        className='focus:outline-none'
                    >
                        {showReenterPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </button>
                </div>

                <div className='mb-4 flex items-center'>
                    <input type='checkbox' className='mr-2' />
                    <label className='text-white'>Remember me</label>
                </div>

                <button type='button' className='border bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] text-black rounded-full px-4 py-1  w-80' > Save </button>
            </div>
        </div>
    );
}
export default Card