import React from 'react';
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
const WhatWeDo = () => {
  return (
    <div className=' mt-32'>
      {/* Gradient Background */}
         <div className='  flex flex-col items-center justify-center gap-y-6'>
              <FaChevronDown className=' text-white' />
              <h1 className=' md:text-[52px] text-[40px] font-[700] text-white md:text-start text-center'> <span className=' font-[400]'>Who We</span> <span className=' bg-gradient-to-l from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent'>Are</span> <span className=' font-[400]'>& What We</span>  <span className=' bg-gradient-to-l from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent'>Do</span></h1>
              <p className=' text-[18px] font-[400] text-[#fdfdfd] max-w-[985px] text-center '>At Apptex, we are a passionate team of innovators, developers, designers, and digital strategists committed to transforming ideas into impactful digital solutions. As a full-service IT company, we specialize in mobile app development, website development, and result-driven digital marketing services, including SEO (Search Engine Optimization), ASO (App Store Optimization), and social media marketing.</p>
              <Link to="/about" className=' bg-[#1A1A1A] py-3 px-6 text-white text-[16px] font-[600]'>Know More About Us</Link>
         </div>


    </div>
  );
}

export default WhatWeDo;
