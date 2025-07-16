import React from "react";
import side1 from "../Cheapskate/Assets/side1.png";
import side2 from "../Cheapskate/Assets/slide2.png";
import side3 from "../Cheapskate/Assets/side3.png";
import side4 from "../Cheapskate/Assets/side4.png";
const Technology = () => {
  return (
    <div className=" md:mx-24 mt-32 mx-4 flex flex-col gap-4 pt-2 pb-12 px-12 rounded-md">
      <h1 className=" text-[#5EACF9] md:text-[40px] sm:text-[37px] text-[27px] font-bold">
        Technology{" "}
        <span className=" text-black md:text-[47px] sm:text-[37px] text-[27px] font-normal">
          Used
        </span>
      </h1>
      <div className=" grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:pt-16 gap-12 md:mx-0 mx-auto ">
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
            React
          </h1>
          <p className=" text-[#606060] text-[16px] font-[500] text-center">
          Developed a responsive and dynamic web application using React 
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-3">
          <img src={side4} alt="" />
          <h1 className=" text-[#22222A] md:text-[22px] text-[15px] font-[600] ">
            flutter{" "}
          </h1>
          <p className=" text-[#606060] text-[16px] font-[500] text-center">
          Utilized Flutter for a consistent UI/UX across platforms
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-3">
          <img src={side2} alt="" />
          <h1 className=" text-[#22222A] md:text-[22px] text-[15px] font-[600] ">
            Node Js{" "}
          </h1>
          <p className=" text-[#606060] text-[16px] font-[500] text-center">
          Node.js for a scalable and efficient backend.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
