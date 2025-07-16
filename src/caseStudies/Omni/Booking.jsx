import React from "react";
import side from "../Omni/Assets/Frame 1000009901.png";
const Booking = () => {
  return (
    <div className=" md:mx-24 mx-4 md:flex md:flex-row items-center flex-col-reverse justify-between gap-7 mt-32">
      <img className="" src={side} alt="" />
      <div>
        <h1 className=" text-[#272727] md:text-[40px] sm:text-[30px] text-[20px] font-bold pt-7 md:pt-0">
          The Barber App Seamlessly Manages{" "}
          <span className="text-[#EF6A1F]">Appointments.</span>
        </h1>
        <p className=" text-[#606060] md:text-[22px] text-[12px] font-normal pt-4 ">
          To optimize the user journey and enhance the efficiency of service
          utilization, we integrated a robust booking and appointment feature
          into our app, empowering users to effortlessly schedule and manage
          appointments.
        </p>
      </div>
    </div>
  );
};

export default Booking;
