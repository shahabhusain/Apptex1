import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <div>

      <div className=' w-full text-white bg-[#1717179b]'>
        <div className='w-[90%] mx-auto py-11'>
          <div className='flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0'>
            {/* Logo Section */}
            <div className='md:w-[30%] flex justify-center md:justify-start'>
              <img className='w-[100px]' src={logo} alt="Company Logo" />
            </div>
            
            {/* Links Section */}
            <div className='md:w-[30%] flex flex-col items-center md:items-start gap-4'>
              <h1 className='text-[16px] font-[500]'>Company</h1>
              <ul className='flex flex-col items-center md:items-start gap-2'>
                <li className='text-[14px] font-[400] list-none'>Home</li>
                <li className='text-[14px] font-[400] list-none'>Our Story</li>
                <li className='text-[14px] font-[400] list-none'>Our Expertise</li>
                <li className='text-[14px] font-[400] list-none'>Our Innovation</li>
                <li className='text-[14px] font-[400] list-none'>Our Insights</li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div className='md:w-[30%] flex flex-col items-center md:items-start gap-4'>
              <h1 className='text-[16px] font-[500]'>Follow Us</h1>
              <div className='flex gap-4'>
                <FaLinkedin className='text-xl hover:text-blue-400 transition-colors cursor-pointer' />
                <FaFacebook className='text-xl hover:text-blue-600 transition-colors cursor-pointer' />
                <FaInstagram className='text-xl hover:text-pink-500 transition-colors cursor-pointer' />
                <FaYoutube className='text-xl hover:text-red-600 transition-colors cursor-pointer' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer