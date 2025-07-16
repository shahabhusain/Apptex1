import React from "react";
import side from "../Assets/Group 344.png";
const Short = () => {
  return (
    <div className=" md:flex block gap-12 justify-between md:mx-24 mx-4 items-center">
      <div className=" md:w-[50%]">
        <h1 className=" md:text-[41px] text-[27px] font-bold text-[#000]">
          <span className=" text-[#EDBD57]">Short Video </span> Content Creation
        </h1>
        <p className=" md:text-[22px] text-[10px] font-normal text-[#606060]">
          Users can create and upload short videos using the mobile application.
          These videos can be on various topics, such as dance, music, comedy,
          cooking, challenges, tutorials, and more.
        </p>
      </div>
      <div>
        <img className=" pt-7 md:pt-0" src={side} alt="" />
      </div>
    </div>
  );
};

export default Short;
