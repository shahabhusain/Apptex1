import React from "react";
import side from "../DevelopmentCenter/Assets/iPhone 12 Pro Max.png";
const Project = () => {
  return (
    <div className=" md:mx-24 mt-32 mx-4">
      <div className=" md:flex block justify-between items-center">
        <div className=" md:w-[30%] w-[50%] mx-auto">
          <img className="" src={side} alt="" />
        </div>
        <div className=" md:w-[60%] pt-7 md:pt-0">
          <h1 className=" md:text-[43px] sm:text-[25px] text-[20px] font-normal">
            Project <span className=" text-[#0C97BD] font-bold">Overview</span>
          </h1>
          <p className=" text-[#606060] md:text-[22px] text-[14px] font-normal">
            Experience the groundbreaking 'Development Centre'—your ultimate
            destination for personalized learning for both your child and
            yourself. Our platform offers a seamless booking system, empowering
            users to schedule educational sessions for their children while also
            providing opportunities for personal development with professional
            coaches. Navigate through our user-friendly interface, select from a
            range of expert coaches, and book tailored sessions to enhance both
            your child's academic journey and your personal growth. Join us on
            this transformative educational adventure where booking is made
            simple, and learning is elevated with the guidance of skilled
            professionals."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
