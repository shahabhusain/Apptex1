import React from "react";
import side1 from "../Asmid/Assets/side1.png";
import side3 from "../Asmid/Assets/side3.png";
import side4 from "../Asmid/Assets/slide4.png";
import side5 from "../Asmid/Assets/side5.png";
const Technology = () => {
  return (
    <div className=" md:mx-24 mt-32 mx-4 flex flex-col gap-4">
      <h1 className=" text-[#1F6CDD] md:text-[40px] sm:text-[37px] text-[27px] font-bold">
        Technology{" "}
        <span className=" text-[#5e5e5e] font-normal">
          Used
        </span>
      </h1>
      <p className=" text-[22px]">For the Askmid project, several technologies are used to create a seamless and robust experience for users. These technologies include </p>
      <div className=" grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:pt-16 gap-4 md:mx-0 mx-auto ">
        <div className=" flex flex-col items-center justify-center gap-3">
          <img src={side1} alt="" />
          <h1 className=" text-[#22222A] md:text-[22px] text-[15px] font-[600] ">
            Figma
          </h1>
          <p className=" text-[#606060] text-[16px] font-[500] text-center">
          Design tools figma has been used to create and prototype the user interface.
          </p>
        </div>
       
        <div className=" flex flex-col items-center justify-center gap-3">
          <img src={side3} alt="" />
          <h1 className=" text-[#22222A] md:text-[22px] text-[15px] font-[600] whitespace-nowrap ">
            cloud Function{" "}
          </h1>
          <p className=" text-[#606060] text-[16px] font-[500] text-center">
          Askmed integrates Google Maps API for geolocation services and map displays.
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-3">
          <img src={side4} alt="" />
          <h1 className=" text-[#22222A] md:text-[22px] text-[15px] font-[600] ">
            firebase{" "}
          </h1>
          <p className=" text-[#606060] text-[16px] font-[500] text-center">
          Server-side JavaScript runtime for building scalable APIs and backend applications.
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-3">
          <img src={side5} alt="" />
          <h1 className=" text-[#22222A] md:text-[22px] text-[15px] font-[600] ">
            flutter{" "}
          </h1>
          <p className=" text-[#606060] text-[16px] font-[500] text-center">
          For the Askmid project, several technologies are used to create a seamless and robust experience for users. These technologies include 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
