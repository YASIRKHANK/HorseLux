import React from 'react';
import img from '../images/helena.jpg';

const Form = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <form className='border outline-none rounded-2xl bg-gray-400 p-6 mt-9'>
                    <p className='font-extrabold'>Select Horses</p>
                    <img src={img} className='w-10 h-10 rounded-full' />
                    <hr className='mt-2 border-t-2 border-gray-500' />
                    <p className='font-extrabold'>Add Detail</p>

                    Date
                    <div className='mb-5'>
                        <input
                            type='date'
                            className='rounded-md outline-none w-60 placeholder-custom'
                            placeholder='Select a Date'
                        />
                    </div>

                    Next Due Date
                    <div className='mb-5'>
                        <input
                            type='text'
                            className='rounded-md outline-none w-60 placeholder-custom'
                            placeholder='Select Next Due Date'
                        />
                    </div>

                    Type
                    <div className='mb-5'>
                        <input
                            type='text'
                            className='rounded-md outline-none w-60 placeholder-custom'
                            placeholder='Select Type'
                        />
                    </div>

                    {/* Textarea */}
                    Comments
                    <div className='mb-5'>
                        <textarea
                            className='rounded-md outline-none w-60 h-24 placeholder-custom'
                            placeholder='Enter your comments'
                        ></textarea>
                    </div>

                    {/* Other input fields with custom placeholder styles */}
                </form>
            </div>
        </div>
    );
};

export default Form;
