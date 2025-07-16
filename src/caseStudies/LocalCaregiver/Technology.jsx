import React from "react";
import side1 from "../LocalCaregiver/Assets/side5.png";
import side2 from "../LocalCaregiver/Assets/side4.png";
import side3 from "../LocalCaregiver/Assets/side3.png";
import side4 from "../LocalCaregiver/Assets/side2.png";
import side5 from "../LocalCaregiver/Assets/side1.png";
const Technology = () => {
  return (
    <div className=" mt-12">
      <div className=" md:mx-24 mx-4 flex flex-col gap-4 pt-6  pb-7 px-7 rounded-[20px] bg-white">
        <h1 className=" text-[#000] md:text-[47px] sm:text-[37px] text-[27px] font-bold">
          Technology{" "}
          <span className=" text-black md:text-[57px] sm:text-[37px] text-[27px] font-normal">
            Used
          </span>
        </h1>
        <div className=" grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 md:pt-5 gap-12  ">
          <div className=" flex flex-col items-center justify-center gap-3">
            <img src={side1} alt="" />
            <h1 className=" text-[#22222A] md:text-[22px] text-[15px] font-[600] ">
              flutter{" "}
            </h1>
            <p className=" text-[#606060] text-[16px] font-normal text-center">
              Local caregiver is built using the Flutter framework for cross-
              platform mobile application development.
            </p>
          </div>
          <div className=" flex flex-col items-center justify-center gap-3">
            <img src={side2} alt="" />
            <h1 className=" text-[#22222A] md:text-[22px] text-[15px] font-[600] ">
              Firebase{" "}
            </h1>
            <p className=" text-[#606060] text-[16px] font-normal text-center">
              Server-side JavaScript runtime for building scalable APIs and
              backend applications.
            </p>
          </div>
          <div className=" flex flex-col items-center justify-center gap-3">
            <img src={side3} alt="" />
            <h1 className=" text-[#22222A] md:text-[22px] text-[15px] font-[600] whitespace-nowrap ">
              Google Maps API
            </h1>
            <p className=" text-[#606060] text-[16px] font-normal text-center">
              local caregiver integrates Google Maps API for geolocation
              services and map displays.
            </p>
          </div>
          <div className=" flex flex-col items-center justify-center gap-3">
            <img src={side4} alt="" />
            <h1 className=" text-[#22222A] md:text-[22px] text-[15px] font-[600] ">
              stripe{" "}
            </h1>
            <p className=" text-[#606060] text-[16px] font-normal text-center">
              For handling payments within the app, payment gateways like Stripe
              is integrated.
            </p>
          </div>

          <div className=" flex flex-col items-center justify-center gap-3">
            <img src={side5} alt="" />
            <h1 className=" text-[#22222A] md:text-[22px] text-[15px] font-[600] ">
              Figma{" "}
            </h1>
            <p className=" text-[#606060] text-[16px] font-normal text-center">
              Design tools figma has been used to create and prototype the user
              interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
