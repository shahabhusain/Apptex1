import React from "react";
import logo from "../Cheapskate/Assets/CheapSkate 1.png";
import side from "../Cheapskate/Assets/Frame 1000002609.png";
import { ScrollRestoration } from "react-router-dom";
const Hero = () => {
  return (
    <div className=" ">
      <ScrollRestoration />
      <div className="   balo w-full h-screen">
        <div className="  md:flex block justify-between gap-16 mx-4 md:mx-24 pt-24 ">
          <div className=" flex flex-col gap-4 justify-center md:w-[50%]">
            <img className=" w-[192px] object-contain" src={logo} alt="" />
            <div>
              <button className=" py-2  hover:text-white duration-300 transition-all ease-in-out bg-[#a4d0fd] rounded-[5px] md:text-[35px] sm:text-[25px] text-[17px] font-[600] text-[#fff] px-8">
                User Case Study
              </button>
            </div>
           
            
            <p className=" text-[#292929] md:text-[20px] text-[14px] font-[400]">
              Revolutionizing budget-friendly experiences. Our mobile and web
              app empowers users to create crowdfunding campaigns for personal
              adventures, gifts, outings, and desired experiences, fostering
              creativity and resourcefulness."
            </p>
            <h1 className=" text-[#5b5b5b] md:text-[25px] sm:text-[25px] text-[25px] font-[600] ">
              Will be available soon
            </h1>
          </div>
          <img
            className=" w-[50%]"
            src={side}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
