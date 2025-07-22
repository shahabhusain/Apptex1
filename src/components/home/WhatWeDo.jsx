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
              <p className=' text-[18px] font-[400] text-[#fdfdfd] max-w-[985px] text-center '>We are a team of skilled tech professionals with over five years of experience, focused on building high-quality web and mobile applications. We combine creativity with functionality to deliver smooth, user-friendly experiences. Our goal is to push the limits of digital innovation, not just by offering services, but by designing digital experiences that matter. With precise coding and thoughtful design, we create powerful and scalable solutions that bring real value to businesses and users.</p>
              <Link to="/about" className=' bg-[#1A1A1A] py-3 px-6 text-white text-[16px] font-[600]'>Know More About Us</Link>
         </div>


    </div>
  );
}

export default WhatWeDo;
