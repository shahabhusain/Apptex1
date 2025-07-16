import React from "react";
import side from "../Skiwit/Assets/Group 340.png";
const Customized = () => {
  return (
    <div className=" md:mx-24 mt-32 mx-4">
      <div className="md:flex block justify-between items-center">
        <div className=" md:w-[45%] md:pt-0 pt-8">
          <h1 className="text-[#EDBD57] md:text-[43px] text-[22px] font-bold">
          Visual Coaching Brilliance
          </h1>
          <p className=" text-[#606060] md:text-[22px] text-[13px] font-normal">
          Experience the power of visual coaching! Coaches, witness your students' skiing prowess through video submissions. Provide detailed feedback by drawing directly on the video, offering precise guidance. Elevate your coaching game by sending video responses, ensuring students grasp every tip and technique.
          </p>
        </div>
        <div className="">
          <img src={side} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Customized;
