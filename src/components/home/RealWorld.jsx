import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../../assets/proj1.png';
import img2 from '../../assets/proj2.png';
import img3 from '../../assets/proj3.png';
import img4 from '../../assets/proj4.png';
import img5 from '../../assets/proj5.png';
import img6 from '../../assets/proj6.png';
import img7 from '../../assets/proj8.png';
import img8 from '../../assets/proj9.png';
import Beams from '../../../Reactbits/Beams/Beams';
import { Link } from 'react-router-dom';
import MetaTags from '../MetaTags';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const RealWorld = () => {
  const horizontalWrapperRef = useRef(null);
  const horizontalContainerRef = useRef(null);
  const panelsRef = useRef([]);

const data = [
  {
    img: img4,
    title: "Fitness Platform",
    application: "Mobile Application/Fitness/Web App",
    title1: "Winners Win - Fitness platform",
    path: "/winner",
    bgColor: "linear-gradient(90deg,rgba(186, 190, 191, 1) 0%, rgba(125, 125, 125, 1) 50%, rgba(38, 41, 39, 1) 100%", // blue
  },
  {
    img: img8,
    title: "Health Care Platform",
    application: "Hire/Caregiver/Mobile App",
    title1: "Local Care Giver",
    path: "/local",
    bgColor: "linear-gradient(90deg,rgba(67, 160, 196, 1) 0%, rgba(143, 199, 87, 1) 50%, rgba(83, 237, 139, 1) 100%)", 
  },
  {
    img: img2,
    title: "Barber Services",
    application: "Mobile Application/BEAUTY & LIFESTYLE/SERVICE BOOKING",
    title1: "Omni – Redefining Beauty & Barber Services",
    path: "/omni",
    bgColor: "linear-gradient(90deg,rgba(204, 129, 80, 1) 0%, rgba(227, 116, 116, 1) 50%, rgba(201, 163, 85, 1) 100%", // amber/brown
  },
  {
    img: img5,
    title: "skydiving Platform",
    application: "coach/Users/Mobile App",
    title1: "Skiwit",
    path: "/skiwit",
    bgColor: "linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(140, 136, 136, 1) 50%", // purple
  },
  {
    img: img1,
    title: "Online Education Platform",
    application: "Website/lms/Mobile App",
    title1: "Development Central",
    path: "/develop",
    bgColor: "linear-gradient(90deg,rgba(0, 222, 181, 0.81) 20%, rgba(42, 176, 154, 1) 39%, rgba(42, 176, 127, 1) 76%", // red
  },
  {
    img: img3,
    title: "Social Media Platform",
    application: "social app/video/Mobile App",
    title1: "Mvuala",
    path: "/movla",
    bgColor: "linear-gradient(90deg,rgba(230, 99, 73, 0.81) 20%, rgba(186, 78, 78, 1) 39%, rgba(252, 101, 101, 1) 76%", // teal
  },
  {
    img: img6,
    title: "Medical Platform",
    application: "admin panel/health/Mobile App",
    title1: "AskMid",
    path: "/askmid",
    bgColor: "linear-gradient(90deg,rgba(73, 230, 217, 0.81) 20%, rgba(78, 186, 184, 1) 39%, rgba(101, 252, 247, 1) 76%", // yellow
  },
  {
    img: img7,
    title: "Donation Platform",
    application: "Admin panel/Campaigns/Mobile App",
    title1: "CheapSkate",
    path: "/cheap",
    bgColor: "linear-gradient(90deg,rgba(0, 107, 98, 0.81) 20%, rgba(85, 161, 159, 1) 39%, rgba(38, 150, 147, 1) 76%", // slate
  },
];


  useEffect(() => {
    const panels = panelsRef.current;
    
    if (!panels.length) return;

      const isMobile = window.innerWidth <= 768;
  const offsetMultiplier = isMobile ? 13 : 9;

    const ctx = gsap.context(() => {
      gsap.to(horizontalContainerRef.current, {
        xPercent: -(offsetMultiplier * (panels.length - 1)),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalWrapperRef.current,
          start: "top 60px",
          end: () => `+=${horizontalContainerRef.current.scrollWidth}`,
          pin: true,
          scrub: 1,
          // markers: true // Uncomment for debugging
        }
      });
    }, horizontalWrapperRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  const addToPanelsRef = (el) => {
    if (el && !panelsRef.current.includes(el)) {
      panelsRef.current.push(el);
    }
  };

  return (
    <div className='relative w-full'>
      {/* Content container - in normal document flow */}
      <MetaTags title="REAL-WORLD SUCCESS STORIES" description="Empowering SME's with cutting-edge IT Solutions and Market-driven Marketing, with seamless UI/UX designs." link="/cheap" image={img1} />
      <div className='relative z-10'>
        <div className='flex flex-col items-center justify-center my-20'>
          <h1 className="text-[44px] font-[400] text-white">
            REAL-WORLD <span className="font-[800]">SUCCESS STORIES</span>
          </h1>
          <p className="text-white mt-2 text-[16px] font-[400]">
           Empowering SME's with cutting-edge IT Solutions and Market-driven Marketing, with seamless UI/UX designs.
          </p>
        </div>
        
        {/* Horizontal scroll section */}
        <div 
          ref={horizontalWrapperRef}
          className="relative w-full h-[700px] overflow-hidden"
        >
          <div 
            ref={horizontalContainerRef}
            className="absolute h-full flex will-change-transform"
          >
            {data.map((item, i) => (
              <div
                key={i}
                ref={addToPanelsRef}
                className="panel group relative w-[400px] h-full shrink-0 overflow-hidden cursor-pointer border-[2px] border-[#b0acac2a] bg-[#fff] hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <div style={{backgroundImage:item.bgColor}} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-10">
                  <h2 className="text-[28px] font-bold text-black tracking-tight">{item.title}</h2>
                  <p className="text-[18px] text-black text-center">{item.application}</p>
                  <div className="absolute bottom-8 w-10 h-1 bg-black rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </div>

                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-white opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]">
                  <div className="mb-4 w-12 h-1 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform delay-100 duration-500"></div>
                  <h1 className="text-[30px] font-extrabold tracking-tight mb-2 text-center">{item.title1}</h1>
                  <p className="text-[18px] text-center text-gray-300">{item.application}</p>
                  <Link to={item.path} className="mt-6 px-6 py-2 bg-white text-black rounded-full font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all delay-150 duration-500 hover:bg-gray-100">
                    View Project
                  </Link>
                  <img className='mt-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all delay-150 duration-500' src={item.img} alt="" />
                </div>
              </div>
            ))}
            <div className='border-[2px] w-[400px] border-[#b0acac2a] px-3 flex flex-col items-center justify-center'>
              <h1 className=' text-white text-center text-[30px] font-medium'>This Could Be Your Success Story</h1>
              <p className=' text-white text-[14px] font-normal text-center'>We've helped others innovate and grow—now it’s your turn to be in the spotlight.</p>
               <Link className=' bg-white text-black rounded-md py-2 px-5 text-[16px] font-normal mt-4' to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealWorld;