import React from "react";
import logo from "../Assets/iPhone 14 Pro Space Black Mockup label.png";
import main from "../Assets/Group 342.png";
import btn from "../Assets/Button.png";
import btn1 from "../Assets/Button (1).png";
import { ScrollRestoration } from "react-router-dom";
const Home = () => {
  return (
  <div className="  h-screen ">
     <div className=" ">
      <ScrollRestoration />
      <div className=" md:flex block justify-between w-[90%] mx-auto mt-12 items-center  ">
        <div className=" ">
          <img className=" w-[131px]" src={logo} alt="logo" />
          <p className=" md:w-[374px] rounded-md mt-4 py-2 px-5 md:text-[35px] text-[29px] font-[500] text-[#B99762] bg-[#f0e7d9]">
            Project Case Study
          </p>
          <div className="">
            <h1 className=" md:text-[37px] text-[27px] font-bold text-black bk py-2 px-3 md:w-80 whitespace-nowrap pt-6">
              <span className=" text-[#B99762]">Mvuala</span> -{" "}
              <span className=" text-[#6F7B7B] font-semibold">Mobile App</span>
            </h1>
          </div>
          <div className=" flex items-center gap-3 md:w-[400px] w-[255px] mt-4">
        <a href=" https://apps.apple.com/us/app/mvuala/id1617627191"><img src={btn} alt="" /></a>
        <a href=" https://play.google.com/store/apps/details?id=com.mvuala.si"><img src={btn1} alt="" /></a>
      </div>
        </div>

        <div className=" md:w-[504px]">
          <img src={main} alt="" />
        </div>
      </div>
    </div>

  </div> 
  );
};

export default Home;
