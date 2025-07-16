import React from "react";
import logo from "../Skiwit/Assets/image 16.png";
import side from "../Skiwit/Assets/Group 90.png";
import { ScrollRestoration } from "react-router-dom";
import btn from '../Skiwit/Assets/Button.png'
import btn1 from '../Skiwit/Assets/Button (1).png'
const Hero = () => {
  return (
    <div className=" ">
      <ScrollRestoration />
      <div className=" h-screen">
        <div className="  md:flex block justify-between ">
          <div className=" flex flex-col gap-4 justify-center ml-12">
            <img className=" w-[99px] object-contain" src={logo} alt="" />
            <div>
              <button className=" py-2 border-[2px]  duration-300 transition-all ease-in-out border-[#272727] rounded-[5px] md:text-[35px] sm:text-[25px] text-[17px] font-[600] text-[#272727] px-8">
                Case Study
              </button>
            </div>
            <h1 className=" text-[#000000] md:text-[45px] sm:text-[35px] text-[25px] font-[600] ">
              SKIWIT Mobile App
            </h1>
            <div></div>
            <p className=" text-[#292929] md:text-[20px] text-[14px] font-[400]">
            Transform your skiing with personalized coaching from top Snowsports experts. Access world-class instructors for personalized feedback, revolutionizing your learning experience anytime, anywhere."
            </p>
            <div className=" flex items-center gap-3 md:w-[400px] w-[255px]">
        <a href="https://apps.apple.com/pk/app/skiwit/id1640661460"><img src={btn} alt="" /></a>
        <a href="https://play.google.com/store/apps/details?id=com.yann.skiwit"><img src={btn1} alt="" /></a>
      </div>
          </div>
          <img
            className=" w-[55%]"
            src={side}
            alt=""
          />
          
        </div>
      
      </div>
      
    </div>
  );
};

export default Hero;
