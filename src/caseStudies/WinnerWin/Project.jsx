import React from "react";
import side from "../WinnerWin/Assets/iPhone 12 Pro Max.png";
const Project = () => {
  return (
    <div className=" md:mx-24 mt-32 mx-4">
      <div className=" md:flex justify-between block  items-center">

          <img className=" w-[25%]"  src={side} alt="" />

        <div className=" md:w-[70%] flex flex-col gap-5">
          <h1 className=" md:text-[43px] sm:text-[25px] text-[20px] font-normal">
            Project <span className=" text-[#000000] font-bold">Overview</span>
          </h1>
          <p className=" text-[#606060] md:text-[19px] text-[14px] font-normal">
            "Winners Win" is a comprehensive and motivational gym app designed
            to empower individuals on their fitness journey, regardless of their
            experience level. This mobile application serves as a holistic
            solution, combining social connectivity, progress tracking,
            personalized motivation, and expert guidance to help users achieve
            there fitness goals and develop a winning mindset. The primary
            objective of Winners Win is to provide users with a multifaceted
            platform that not only helps them achieve their fitness goals but
            also nurtures a winning mindset. By connecting with a supportive
            community, tracking their progress, receiving personalized
            motivation, and engaging in meaningful fitness conversations, users
            are empowered to embark on their journey to a healthier, stronger,
            and more confident version of themselves.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
