import React from "react";
import logo from "../LocalCaregiver/Assets/Logo (2).png";
import main from "../LocalCaregiver/Assets/Group 7772.png";
import btn from "../LocalCaregiver/Assets/Button.png";
import btn1 from "../LocalCaregiver/Assets/Button (1).png";
import { ScrollRestoration } from "react-router-dom";
const Home = () => {
  return (
    <div className=" bg-[#189bff1c] h-screen">
      <div className="pt-12">
      <ScrollRestoration />
        <div className=" md:flex block  justify-between items-center gap-24 md:mx-24 mx-4 md:pt-0 pt-16 ">
          <div className="  ">
            <img className=" w-[131px]" src={logo} alt="logo" />
          <div>
              <p className=" rounded-md mt-4 py-2 px-5 w-fit md:text-[35px] text-[29px] font-[500] text-[#0D7592]  border-[2px] border-[#EF6A1F]">
              Case Study
            </p>
          </div>
            <div className="">
              <h1 className=" 2xl:text-[47px] md:text-[37px] text-[27px] font-bold text-black bak py-2 px-3 2xl:w-full md:w-80  pt-6">
                <p className=" text-[#0D7592]">local caregiver</p>
                <p className=" text-[#000000] font-semibold">Mobile App</p>
              </h1>
            </div>
            <div className=" flex items-center gap-3 md:w-[400px] w-[255px] mt-4">
        <a href="   https://apps.apple.com/us/app/local-caregiver/id1642308796"><img src={btn} alt="" /></a>
        <a href=" https://play.google.com/store/apps/details?id=com.localcaregiver.com"><img src={btn1} alt="" /></a>
      </div>
            <p className="text-[#484444] font-normal text-[20px] mt-4">
              "Empowering Lives, Earning Smiles" Start Earning Money as an
              In-Home Caregiver!
            </p>
          </div>

          <div className="">
            <img src={main} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
