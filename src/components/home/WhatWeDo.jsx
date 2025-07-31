import React from 'react';
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import MetaTags from '../MetaTags';
const WhatWeDo = () => {
  return (
    <div className=' mt-32'>
      <MetaTags title="Who We Are and the Value We Deliver" description="At Apptex, we guarantee a 100% Success rate for every Mobile App, Website Development, Digital Marketing, and UI/UX project. Our engineers, marketers, and developers are specialized in delivering advanced-level software and marketing solutions. Not only do we offer robust and scalable solutions, but we also add value to businesses by providing competitive and market-driven pricing." link="/about" />
      {/* Gradient Background */}
         <div className='  flex flex-col items-center justify-center gap-y-6'>
              <FaChevronDown className=' text-white' />
              <h1 className=' md:text-[52px] text-[40px] font-[700] text-white md:text-start text-center'> <span className=' font-[400]'>Who We </span> <span className=' bg-gradient-to-l from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent'>Are</span> <span className=' font-[400]'>and the Value We </span>  <span className=' bg-gradient-to-l from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent'>Deliver</span></h1>
              <p className=' text-[18px] font-[400] text-[#fdfdfd] max-w-[985px] text-center '>At Apptex, we guarantee a 100% Success rate for every Mobile App, Website Development, Digital Marketing, and UI/UX project. Our engineers, marketers, and developers are specialized in delivering advanced-level software and marketing solutions. Not only do we offer robust and scalable solutions, but we also add value to businesses by providing competitive and market-driven pricing.</p>
              <Link to="/about" className=' bg-[#1A1A1A] py-3 px-6 text-white text-[16px] font-[600]'>Know More About Us</Link>
         </div>


    </div>
  );
}

export default WhatWeDo;
