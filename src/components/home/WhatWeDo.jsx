import React from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Beams from '../../../Reactbits/Beams/Beams';

const GradientIcon = ({ children }) => (
  <svg width="0" height="0">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop stopColor="#ff0000" offset="0%" />
        <stop stopColor="#ff7f00" offset="50%" />
        <stop stopColor="#ff1493" offset="100%" />
      </linearGradient>
    </defs>
  </svg>
);

const WhatWeDo = () => {
  return (
    <div className='relative'>
      {/* Gradient Background */}
        <div style={{ width: '100%', height: '100vh', zIndex:"-1000" }}  className='  md:w-[85%] w-[97%] mx-auto'>
          
            <Beams  beamWidth={2}
    beamHeight={15}
    beamNumber={12}
    lightColor="#ffffff"
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={0} />
    </div>
         <div className=' absolute top-32 left-0 right-0 flex flex-col items-center justify-center gap-y-6'>
              <FaChevronDown className=' text-white' />
              <h1 className=' md:text-[52px] text-[40px] font-[700] text-white md:text-start text-center'> <span className=' font-[400]'>Who We</span> <span className=' bg-gradient-to-l from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent'>Are</span> <span className=' font-[400]'>& What We</span>  <span className=' bg-gradient-to-l from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent'>Do</span></h1>
              <p className=' text-[18px] font-[500] text-[#fdfdfd] max-w-[985px] text-center '>We are a team of skilled tech professionals with over five years of experience, focused on building high-quality web and mobile applications. We combine creativity with functionality to deliver smooth, user-friendly experiences. Our goal is to push the limits of digital innovation, not just by offering services, but by designing digital experiences that matter. With precise coding and thoughtful design, we create powerful and scalable solutions that bring real value to businesses and users.</p>
              <button className=' bg-[#1A1A1A] py-3 px-6 text-white text-[16px] font-[600]'>Know More About Us</button>
         </div>


    </div>
  );
}

export default WhatWeDo;
