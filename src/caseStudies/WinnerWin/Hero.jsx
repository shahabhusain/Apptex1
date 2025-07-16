import React from "react";
import logo from "../WinnerWin/Assets/Logo Black.png";
import side from "../WinnerWin/Assets/Group 7772.png";
import btn from '../WinnerWin/Assets/Button.png'
import btn1 from '../WinnerWin/Assets/Button (1).png'
import { ScrollRestoration } from "react-router-dom";
const Hero = () => {
  return (
    <div className=" bg-[#272727] h-screen">
      <ScrollRestoration />
      <div className=" md:pt-24 pt-7 mx-4 md:mx-24">
        <div className="  md:flex block justify-between ">
          <div className=" flex flex-col gap-6 justify-center">
            <img className=" w-[92px] h-[93px]" src={logo} alt="" />
            <h1 className=" text-[#ffffff] md:text-[45px] sm:text-[35px] text-[25px] font-[600] whitespace-nowrap ">
              Winners Win
              <p className=" text-[#d4d3d3]">Mobile App</p>
            </h1>
            <div>
              <button className=" py-2  hover:text-white duration-300 transition-all ease-in-out bg-[#333333] rounded-[5px] md:text-[35px] sm:text-[25px] text-[17px] font-[600] text-[#fff] px-8">
                User Case Study
              </button>
            </div>
            <div></div>
            <p className=" text-[#d3d3d3] md:text-[20px] text-[14px] font-[400]">
              "Winners Win" is a comprehensive and motivational gym app designed
              to empower individuals on their fitness journey, regardless of
              their experience level.
            </p>
            <div className=" flex items-center gap-3 md:w-[400px] w-[255px] mt-4">
        <a href="   https://apps.apple.com/us/app/winners-win/id6449588127"><img src={btn} alt="" /></a>
        <a href="#"><img src={btn1} alt="" /></a>
      </div>
          </div>
          <img className=" md:max-w-[555px] md:pt-0 pt-10" src={side} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
