import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className='max-w-screen-xl py-16 mx-auto'>
        <div className='w-full flex justify-between'>
            <div className='max-w-sm shadow-lg p-10 '>
                <div className='space-y-4'>
                   <div className='flex'> <div className='w-10 h-10 flex items-center justify-center bg-red-500 rounded-full'><IoCallOutline size={24} className=' rounded text-white'/></div><div className='flex items-center justify-center pl-4 text-md font-semibold'>Call to us</div></div>
                    <p className='font-thin text-sm'>We are available 24/7, 7 days a week.</p>
                    <p className='font-thin pb-5 text-sm'>Phone: +919048092961</p>
                </div>
                <div className='border-t border-black space-y-4 pt-5'>
                <div className='flex'> <div className='w-10 h-10 flex items-center justify-center bg-red-500 rounded-full'><MdOutlineEmail size={24} className=' rounded text-white'/></div><div className='flex items-center justify-center pl-4 text-md font-semibold '>Write to us</div></div>
                    <p className='font-thin text-sm'>Fill out our form and we will contact you within 24 hours</p>
                    <p className='font-thin text-sm'>Emails: customer@exclusive.com</p>
                    <p className='font-thin text-sm'>Emails: support@exclusive.com</p>
                </div>         
            </div>
            <div className='max-w-full shadow-lg p-10 space-y-5 '>
                <div className='flex space-x-3'>
                    <input type="text" placeholder='Your Name' className='p-3 bg-neutral-100 outline-none placeholder-neutral-600 font-thin' />
                    <input type="text" placeholder='Your Email' className='p-3 bg-neutral-100 outline-none placeholder-neutral-600 font-thin'/>
                    <input type="text" placeholder='Your Phone' className='p-3 bg-neutral-100 outline-none placeholder-neutral-600 font-thin'/>
                </div>
                <div className=''>
                    <textarea name="" id="" className=' bg-neutral-100 w-full h-40 p-3 outline-none placeholder-neutral-600 font-thin' placeholder='Your Message' ></textarea>
                </div>
                <div className='flex justify-end'>
                    <button className='px-6 rounded py-3 bg-red-600 text-white' onClick={()=>navigate("/user/home")}>Send Message</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact