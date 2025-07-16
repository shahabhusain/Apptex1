import React from "react";
import side from "../LocalCaregiver/Assets/iPhone 15 Pro Portrait Left Mockup.png";
const Project = () => {
  return (
    <div className=" md:mx-24 mt-20 mx-4 ">
      <div className=" md:flex block justify-between">
        <div className=" md:w-[25%] w-[50%] mx-auto">
          <img className="" src={side} alt="" />
        </div>
        <div className=" md:w-[60%] pt-7 md:pt-12">
          <h1 className=" md:text-[43px] sm:text-[25px] text-[20px] font-normal pt-7">
            Project <span className=" text-[#0D7592] font-bold">Overview</span>
          </h1>
          <p className=" text-[#606060] md:text-[20px] text-[14px] font-normal pt-5">
            LocalCareGiver is a platform connecting caregivers with those who
            needs in-home care. Using Local Caregiver.net you can easily browse
            through caregivers profiles, read reviews and schedule appointments.
            Find the right caregiver in your area today!
          </p>
          <p className=" text-[#606060] md:text-[20px] text-[14px] font-normal mt-6">
             Looking for a caregiver job? Whether you are an experienced
            caregiver or just starting your caregiver journey, LocalCareGiver
            provides a platform to find rewarding jobs that fit your schedule
            and preferences. Join today to find jobs in your community! Earn
            money while making a meaningful difference in the lives of the
            elderly in their homes. Enjoy flexible hours. competitive pav. and
            the satisfaction or helping someone who needs you. Join our team and
            earn money while improving the quality of life of someone in your
            community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
