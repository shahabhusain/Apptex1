import React from "react";
import arrow from "../../assets/svg/Arrow right.svg";
import img12 from "../../assets/proj9.png";
import img12logo from "../../assets/local.png";
import img13 from "../../assets/proj2.png";
import img13logo from "../../assets/omni.png";
import img14 from "../../assets/proj5.png";
import img14logo from "../../assets/skiwit.png";
import img15 from "../../assets/proj1.png";
import img15logo from "../../assets/develop.png";
import img16 from "../../assets/proj3.png";
import img16logo from "../../assets/movla.png";
import img17 from "../../assets/proj6.png";
import img17logo from "../../assets/Askmid.png";
import img18 from "../../assets/proj4.png";
import img18logo from "../../assets/winner.png";
import img19 from "../../assets/proj8.png";
import img19logo from "../../assets/cheap.png";
import { Link } from "react-router-dom";


const Portfolios = () => {
  const portfolioData = [
        {
          imgUrl: img12,
          logo: img12logo,
          title:"Local Care Giver",
          desc1: "Hire/Caregiver/Mobile App",
          desc: "Local Care Giver is a platform that connects families with trusted, qualified caregivers in their area for personalized, reliable in-home support.",
          bgColor: "img1",
          Link: "/local",
        },
      
        {
          imgUrl: img13,
          logo: img13logo,
          title:"Omni – Redefining Beauty & Barber Services",
          desc1: "Mobile Application/BEAUTY & LIFESTYLE/SERVICE BOOKING",
          desc: "Omni is a modern mobile app built to enhance the beauty and grooming experience for both clients and professionals. From effortless appointment booking and service browsing to personalized recommendations and stylist portfolios, Omni brings convenience and quality together in one elegant platform.",
          btn: "View case study",
          bgColor: "img2",
          Link: "/omni",
        },
      
        {
          imgUrl: img14,
          logo: img14logo,
          title:"skiwit",
          desc1: "coach/Users/Mobile App",
          desc: "Skiwit connects coaches and trainees, offering a platform for personalized ski training, skill development, and performance tracking.",
          btn: "View case study",
          bgColor: "img3",
          Link: "/skiwit",
        },
      
        {
          imgUrl: img15,
          logo: img15logo,
          title:"development central",
          desc1: "Website/lms/Mobile App",
          desc: "E-Tutor is an education, courses, and online (LMS) learning management system Figma template designed for people who want to start teaching online, create an LMS etc.",
          btn: "View case study",
          bgColor: "img4",
          Link: "/develop",
        },
      
        {
          imgUrl: img16,
          logo: img16logo,
          title:"Mvuala",
          desc1: "social app/video/Mobile App",
          desc: "Mvuala is a short-form video platform where users can create, share, and explore content—just like TikTok, but with its own unique twist.",
          btn: "View case study",
          bgColor: "img5",
          Link: "/movla",
        },
      
        {
          imgUrl: img17,
          logo: img17logo,
          title:"AskMid",
          desc1: "admin panel/health/Mobile App",
          desc: "AskMed is a health platform that provides quick, reliable answers and guidance from medical professionals to support your well-being anytime.",
          btn: "View case study",
          bgColor: "img6",
          Link: "/askmid",
        },
      
        {
          imgUrl: img18,
          logo: img18logo,
          desc1: "Mobile Application/Fitness/Web App",
          title:"Winners Win - Fitness platform",
          desc: "Winners Win is a dynamic fitness platform designed to help individuals reach their full potential by offering personalized workout plans, expert coaching, and a supportive community. Whether you're a beginner or an experienced athlete, Winners Win motivates you to achieve your fitness goals and embrace a healthier lifestyle.",
          btn: "View case study",
          bgColor: "img7",
          Link: "/winner",
        },
      
        {
          imgUrl: img19,
          logo: img19logo,
          title:"CheapSkate",
          desc1: "Admin panel/Campaigns/Mobile App",
          desc: "CheapSkate for Campaigns is a cost-effective platform designed to help you create and manage impactful marketing campaigns on a tight budget.",
          btn: "View case study",
          bgColor: "img8",
          Link: "/cheap",
        }, 
  ]
  return (
    <div className="">
      {portfolioData.map((item) => (
        <div
          key={item.id}
          className={` ${
            item.bgColor === "img1"
              ? "border-[1px] border-[#ffffff91] p-4"
              : item.bgColor === "img2"
              ? "border-[1px] border-[#ffffff91] p-4"
              : item.bgColor === "img3"
              ? "border-[1px] border-[#ffffff91] p-4"
              : item.bgColor === "img4"
              ? "border-[1px] border-[#ffffff91] p-4"
              : item.bgColor === "img5"
              ? "border-[1px] border-[#ffffff91] p-4"
              : item.bgColor === "img6"
              ? "border-[1px] border-[#ffffff91] p-4"
              : item.bgColor === "img7"
              ? "border-[1px] border-[#ffffff91] p-4"
              : item.bgColor === "img8"
              ? "border-[1px] border-[#ffffff91] p-4"
              : ""
          } md:flex block items-center rounded-[20px] justify-between  md:mx-24 2xl:mx-32   mx-4  my-24`}
        >
          <div className="flex flex-col gap-3 px-5  ">
            <img className="w-[79px]" src={item.logo} alt="" />
            <h1 className=" text-[22px] text-white font-[600]">{item.title}</h1>
            <p className="text-[12px] 2xl:text-[16px] font-[400] text-[#ffffff]">
              {item.desc1}
            </p>
            <p className="text-[#ffffff] 2xl:text-[16px] text-[14px] font-normal">
              {item.desc}
            </p>
            <Link to={item.Link} className="border-[2px] mt-6 border-[#d781ef] w-fit text-white text-[16px] font-[600] py-2 px-4 rounded-full flex items-center">
              View Case Study
              <div className="bg-white text-white rounded-full h-5 w-5 flex items-center justify-center ml-2">
                <img className="" src={arrow} alt="" />
              </div>
            </Link>
          </div>
          <img
            className="md:w-[444px] 2xl:w-[555px] rounded-[20px]"
            src={item.imgUrl}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Portfolios;
