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
      path: ""
    },
    {
      img: img8,
      title: "Health Care Platform",
      application: "Hire/Caregiver/Mobile App",
      title1: "Local Care Giver",
      path: ""
    },
    {
      img: img2,
      title: "Barber Services",
      application: "Mobile Application/BEAUTY & LIFESTYLE/SERVICE BOOKING",
      title1: "Omni – Redefining Beauty & Barber Services",
      path: ""
    },
    {
      img: img5,
      title: "skydiving Platform",
      application: "coach/Users/Mobile App",
      title1: "Skiwit",
      path: ""
    },
    {
      img: img1,
      title: "Online Education Platform",
      application: "Website/lms/Mobile App",
      title1: "Development Central",
      path: ""
    },
    {
      img: img3,
      title: "Social Media Platform",
      application: "social app/video/Mobile App",
      title1: "Mvuala",
      path: ""
    },
    {
      img: img6,
      title: "Medical Platform",
      application: "admin panel/health/Mobile App",
      title1: "AskMid",
      path: ""
    },
    {
      img: img7,
      title: "Donation Platform",
      application: "Admin panel/Campaigns/Mobile App",
      title1: "CheapSkate",
      path: ""
    },
  ];

  useEffect(() => {
    const panels = panelsRef.current;
    
    if (!panels.length) return;

    const ctx = gsap.context(() => {
      gsap.to(horizontalContainerRef.current, {
        xPercent: -(9 * (panels.length - 1)),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalWrapperRef.current,
          start: "top 122px",
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
      {/* Background beams - positioned absolutely behind content
      <div className='absolute top-0 left-0 w-full h-full z-0'>
        <Beams 
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0} 
        />
      </div> */}

      {/* Content container - in normal document flow */}
      <div className='relative z-10'>
        <div className='flex flex-col items-center justify-center my-20'>
          <h1 className="text-[44px] font-[400] text-white">
            REAL-WORLD <span className="font-[800]">SUCCESS STORIES</span>
          </h1>
          <p className="text-white mt-2 text-[16px] font-[400]">
            How Our IT Solutions Helped Businesses Overcome Challenges and Achieve Growth
          </p>
        </div>
        
        {/* Horizontal scroll section */}
        <div 
          ref={horizontalWrapperRef}
          className="relative w-full h-[600px] overflow-hidden"
        >
          <div 
            ref={horizontalContainerRef}
            className="absolute h-full flex will-change-transform"
          >
            {data.map((item, i) => (
              <div
                key={i}
                ref={addToPanelsRef}
                className="panel group relative w-[400px] h-full shrink-0 overflow-hidden cursor-pointer border-[2px] border-[#b0acac2a] bg-[#1717179b] hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-10">
                  <h2 className="text-[28px] font-bold text-white tracking-tight">{item.title}</h2>
                  <p className="text-[18px] text-white text-center">{item.application}</p>
                  <div className="absolute bottom-8 w-10 h-1 bg-black rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </div>

                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-white opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]">
                  <div className="mb-4 w-12 h-1 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform delay-100 duration-500"></div>
                  <h1 className="text-[30px] font-extrabold tracking-tight mb-2 text-center">{item.title1}</h1>
                  <p className="text-[18px] text-center text-gray-300">{item.application}</p>
                  <button className="mt-6 px-6 py-2 bg-white text-black rounded-full font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all delay-150 duration-500 hover:bg-gray-100">
                    View Project
                  </button>
                  <img className='mt-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all delay-150 duration-500' src={item.img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealWorld;