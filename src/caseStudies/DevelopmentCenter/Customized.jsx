import React from "react";
import side from "../DevelopmentCenter/Assets/Grou.png";
const Customized = () => {
  return (
    <div className=" md:mx-24 mx-4 mt-32 ">
      <div className="md:flex block justify-between items-center">
        <div className=" md:w-[45%] md:pt-0 pt-8">
          <h1 className="text-[#0C97BD] md:text-[43px] text-[22px] font-bold">
            Customized Sessions
          </h1>
          <p className=" text-[#606060] md:text-[22px] text-[13px] font-normal">
            Coaches hold the reins on session payments by customizing charges
            based on session lengths, granting them the flexibility to set
            prices as they deem fit for 30, 45, or 60-minute sessions. Time
            slots are entirely at the coach's discretion, ensuring flexibility
            and convenience for both parties involved.
          </p>
        </div>
        <div className=" ">
          <img src={side} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Customized;
