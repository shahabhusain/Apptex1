import React, { useState } from 'react';
import team from '../../assets/team1.png'
import team1 from '../../assets/team2.png'
import team2 from '../../assets/team3.png'
import team3 from '../../assets/team4.png'
import team4 from '../../assets/team5.png'
import { FaLinkedin } from "react-icons/fa6";
const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Team members data
  const teamMembers = [
    {
      title:"A team of makers, thinkers, and problem solvers",
      name: "Hajera Bakhshi",
      position: "ui ux designer  ",
      image: team,
      desc:"Hajera designs with purpose shaping experiences that not only look beautiful, but feel right. Every screen they is guided by empathy, clarity, and a deep understanding of human behaviour." ,
      link:"https://www.linkedin.com/in/hajera-bakhshi-graphic-designer/"
    },
    {
      title:"Every product we ship starts with these minds",
      name: "Saqib Hussain ",
      position: "full stack developer ",
      image: team1,
      desc:"From backend logic to frontend polish, Saqib Hussain brings complete solutions to life. He’s the bridge between design, data, and seamless user experiences.",
      link:"https://www.linkedin.com/in/saqib-hussain-204682184/?originalSubdomain=pk"
    },
    {
      title:"Driven by code. United by vision",
      name: "Shahab Hussain",
      position: "Frontend Developer",
      image: team2,
      desc:"Shahab transforms ideas into intuitive interfaces, bridging design and technology to create seamless, human-centered digital experiences.",
      link:"https://www.linkedin.com/in/shahab-hussain-5668a0286/"
    },
    {
      title:"The talent turning ideas into impact",
      name: "Kamran Jalil",
      position: "Fluter developer ",
      image: team3,
      desc:"Kamran  has high performance mobile apps with clean code and beautiful UI, He bridges creativity and functionality across platforms.  he helps out teammates with a quick debugging tip.",
      link:"https://www.linkedin.com/in/kamran-jalil-665910210/"
    },

    {
      title:"Passionate creators. Skilled builders",
      name: "Afaq Zahir",
      position: "Fluter developer ",
      image: team4,
      desc:"A problem solver at heart, Afaq Zahir builds fast, scalable mobile apps with precision and care. Their work blends technical depth with a seamless user experience.",
      link:"https://www.linkedin.com/in/afaqxdev"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  return (
   <div className='relative bg-[#1717179b] pb-6' >

      {/* Content container */}
      <div className=" flex items-center mt-32 relative z-10">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Text */}
          <div className="flex flex-col gap-2.5 justify-center md:pl-20 p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              MEET OUR <span className="text-pink-500">TEAM</span>
            </h1>
            <h1 className='text-[20px] font-[700] text-[#F8F8F8]'>{teamMembers[currentSlide].title}</h1>
            <a target='_blank' className='w-fit bg-[#F8F8F81A] py-3 px-5 flex items-center gap-2 text-white' href={teamMembers[currentSlide].link}>
              <span><FaLinkedin size={30} /></span> {teamMembers[currentSlide].name}
            </a>
            <p className="text-gray-300 text-lg">
              {teamMembers[currentSlide].desc}
            </p>
          </div>
          
          {/* Right Column - Team Member Carousel */}
          <div className="">
            <div className="">
              {/* Team Member Card */}
              <div className="">
                <img 
                  src={teamMembers[currentSlide].image} 
                  alt={teamMembers[currentSlide].name}
                  className="w-full md:h-[520px] object-contain object-center rounded-lg"
                />
              </div>
              
              {/* Name and Position */}
              <div className="relative mt-6">
                <div className="flex justify-center mb-2">
                  <h2 className="text-white text-xl font-bold uppercase">{teamMembers[currentSlide].name}</h2>
                </div>
                <div className="flex justify-center mb-4">
                  <p className="text-purple-400 text-[20px] font-medium tracking-wide uppercase">{teamMembers[currentSlide].position}</p>
                </div>
                
                {/* Navigation Controls */}
                <div className="flex justify-center items-center gap-4">
                  <button 
                    onClick={prevSlide}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  {/* Progress Indicator */}
                  <div className="flex items-center">
                    <div className="w-16 h-1 bg-gray-600 rounded-full relative">
                      <div 
                        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
                        style={{ width: `${(currentSlide / (teamMembers.length - 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={nextSlide}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
  );
};

export default Team;