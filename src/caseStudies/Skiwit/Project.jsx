import React from "react";
import side from "../Skiwit/Assets/Frame 1000009940.png";
const Project = () => {
  return (
    <div className=" md:mx-24 mt-32 mx-4">
      <div className=" md:flex block gap-8 justify-between items-center">
        <div className="">
          <img className="" src={side} alt="" />
        </div>
        <div className=" md:w-[60%] pt-7 md:pt-0">
          <h1 className=" md:text-[43px] sm:text-[25px] text-[20px] font-bold text-[#000000]">
            Project <span className=" text-[#696565]">Overview</span>
          </h1>
          <p className=" text-[#606060] md:text-[22px] text-[14px] font-normal">
          Skiwit is an innovative mobile application designed to revolutionize the way individuals learn and improve their skiing abilities. By providing access to world-class Snowsports coaches and industry leaders, Skiwit enables users to receive personalized coaching and feedback from the comfort of their own homes. Skiwit is not just an app; it's a virtual skiing companion that brings the expertise of world-class coaches to your fingertips, making the journey of improving skiing skills accessible, enjoyable, and highly effective.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
