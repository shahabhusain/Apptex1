import React from "react";
const Solution = () => {
  return (
    <div className=" md:mx-24 my-32 mx-4 ">
      <h1 className=" text-[#1F6CDD] md:text-[42px] text-[22px] font-bold">
        Solution We Provided
      </h1>
      <p className=" text-[#606060] font-[500] md:text-[17px] text-[14px] pt-5">
        Our solutions redefine app development, offering tailored resolutions to
        security, performance, and user experience challenges, fostering a
        cutting-edge and user-centric digital evolution.
      </p>

      <div className=" md:flex block justify-between">
        <div className=" flex flex-col gap-5 pt-4">
          <div className=" flex gap-4">
            <h1 className=" text-[#1F6CDD] text-[30px] font-medium">1</h1>
            <div>
              <h2 className=" text-[#1F6CDD] text-[30px] font-medium">
                Integration Approach
              </h2>
              <p className=" text-[#606060] text-[17px] font-[500]">
                Implemented a modular architecture to effectively integrate
                Flutter and React.js components.
              </p>
            </div>
          </div>

          <div className=" flex gap-4">
            <h1 className=" text-[#1F6CDD] text-[30px] font-medium">2</h1>
            <div>
              <h2 className=" text-[#1F6CDD] text-[30px] font-medium">
                Firebase Cloud Function Expertise
              </h2>
              <p className=" text-[#606060] text-[17px] font-[500]">
                Collaborated with Firebase experts to set up and optimize Cloud
                Functions for timely reminders.
              </p>
            </div>
          </div>

          <div className=" flex gap-4">
            <h1 className=" text-[#1F6CDD] text-[30px] font-medium">3</h1>
            <div>
              <h2 className=" text-[#1F6CDD] text-[30px] font-medium">
                Subscription System Enhancement
              </h2>
              <p className=" text-[#606060] text-[17px] font-[500]">
                · Utilized Firebase authentication and real-time database
                capabilities for secure subscription-based chat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
