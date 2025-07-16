import React from "react";
import logo from "../Asmid/Assets/AskMedP1 2.png";
import side from "../Asmid/Assets/Group 973.png";
import { ScrollRestoration } from "react-router-dom";
const Hero = () => {
  return (
    <div className="bg-[#6DA8FF] h-screen">
      <div className="">
      <ScrollRestoration />
      <div className="mx-4 md:mx-24 pt-11">
        <div className="  md:flex block justify-between gap-16 ">
          <div className=" flex flex-col gap-6 justify-center md:w-[50%]">
            <img className=" w-[122px] object-contain" src={logo} alt="" />

            <h1 className=" text-[#ffffff] md:text-[45px] sm:text-[35px] text-[25px] font-[600] ">
              Mobile App
            </h1>
            <div>
              <button className=" bk1 py-2  duration-300 transition-all ease-in-out rounded-[5px] md:text-[35px] sm:text-[25px] text-[17px] font-[600] text-[#ffffff] px-8">
                User Case Study
              </button>
            </div>

            <p className=" text-[#ffffff] md:text-[20px] text-[14px] font-[400]">
            AskMed is an all-encompassing health management application crafted to meet the needs of both users and administrators.
            </p>
            <h1 className=" text-[#5b5b5b] md:text-[25px] sm:text-[25px] text-[25px] font-[600] ">
              Will be available soon
            </h1>
          </div>
          <img
            className=" md:max-w-[50%] object-contain md:pt-0 pt-10"
            src={side}
            alt=""
          />
        </div>
      </div>
    </div>

    </div>  );
};

export default Hero;
