import React from "react";
import side from "../Asmid/Assets/iPhone 13 Pro Max - Silver - Portrait.png";
const Project = () => {
  return (
    <div className=" md:mx-24 mt-32 mx-4">
      <div className=" md:flex block gap-8 justify-between items-center">
          <img className="" src={side} alt="" />

        <div className=" md:w-[65%] pt-7 md:pt-0">
          <h1 className=" md:text-[43px] sm:text-[25px] text-[20px] font-bold text-[#000000]">
            Project <span className=" text-[#696565]">Overview</span>
          </h1>
          <p className=" text-[#606060] md:text-[20px] text-[14px] font-normal">
          AskMed is a comprehensive health management application designed to cater to both users and administrators. The application employs Flutter for the user-facing mobile app and React.js for the admin web interface, with a common backend powered by Firebase. This robust system allows users to manage their medical history, track health readings, set reminders, and engage in real-time communication with healthcare administrators.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
