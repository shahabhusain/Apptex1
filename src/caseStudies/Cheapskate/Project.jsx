import React from "react";
import side from "../Cheapskate/Assets/iPhone 12 Pro Max.png";
const Project = () => {
  return (
    <div className=" md:mx-24 mt-32 mx-4">
      <div className=" md:flex block justify-between items-center">
          <img className="" src={side} alt="" />
        <div className=" md:w-[65%] pt-7 md:pt-0">
          <h1 className=" md:text-[43px] sm:text-[25px] text-[20px] font-bold text-[#5EACF9]">
            Project Overview
          </h1>
          <p className=" text-[#606060] md:text-[22px] text-[14px] font-normal">
          Cheapskate is a groundbreaking mobile and web application designed to empower individuals to pursue life's experiences on a budget. It encourages creativity and resourcefulness by providing a platform where users can launch crowdfunding campaigns for personal adventures, gifts, outings, or any desired experiences. Cheapskate aims to break down financial barriers, turning limitations into opportunities for ingenuity and fun.  The application is developed on two key platforms: a Mobile App built with Flutter and Node.js, and a Website created using React
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
