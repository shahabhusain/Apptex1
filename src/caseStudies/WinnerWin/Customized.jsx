import React from "react";
import side from "../WinnerWin/Assets/Group 7771 (2).png";
const Customized = () => {
  return (
    <div className=" md:mx-24 mt-32 mx-4">
      <div className="md:flex block justify-between items-center">
        <div className=" md:w-[45%] md:pt-0 pt-8">
          <h1 className="text-[#000000] md:text-[43px] text-[22px] font-bold">
            Capture and Showcase Workouts
          </h1>
          <p className=" text-[#606060] md:text-[22px] text-[13px] font-normal">
            The app simplifies progress tracking by enabling users to visually
            document their workouts through images. This feature allows users to
            share their achievements with the community, motivating others to
            strive for excellence.
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
