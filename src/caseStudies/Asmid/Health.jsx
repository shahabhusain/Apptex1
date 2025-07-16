import React from "react";
import side from '../Asmid/Assets/Frame 1000009908.png'
const Health = () => {
  return (
    <div className=" mx-24 mt-32 ">
      <h1 className=" text-[#1D67D5] text-center text-[39px] font-bold">Health Monitoring</h1>
      <p className=" text-center pt-2 text-[20px]">
        Track and record health readings such as blood pressure and blood sugar
        levels. · Store and view historical health data for future reference.
      </p>
      <img className=" w-[777px] mx-auto pt-4" src={side} alt="" />
    </div>
  );
};

export default Health;
