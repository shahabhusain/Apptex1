import React from "react";
import side from "../WinnerWin/Assets/Group 7771 (1).png";
const Booking = () => {
  return (
    <div className=" md:mx-24 mt-32 mx-4">
      <div className="md:flex block justify-between items-center">
        <div className=" md:w-[50%] w-[70%] mx-auto">
          <img src={side} alt="" />
        </div>
        <div className=" md:w-[45%] md:pt-0 pt-8">
          <h1 className="text-[#000000] md:text-[33px] text-[22px] font-bold">
            Thriving Fitness Community
          </h1>
          <p className=" text-[#606060] md:text-[17px] text-[13px] font-normal">
            Winners Win fosters a sense of belonging by allowing users to
            connect with like-minded individuals in a supportive fitness
            community. Users can follow others, share their progress, and draw
            inspiration from fellow members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
