import React, { useState } from 'react';
import team from '../../assets/team1.png';
import team1 from '../../assets/team2.png';
import team2 from '../../assets/team3.png';
import team3 from '../../assets/team4.png';
import team4 from '../../assets/team5.png';
import { FaLinkedin } from "react-icons/fa6";
import ProfileCard from '../../../Reactbits/ProfileCard/ProfileCard';

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Team members data
  const teamMembers = [
    {
      title: "A team of makers, thinkers, and problem solvers",
      name: "Hajera Bakhshi",
      position: "UI UX Designer",
      image: team,
      desc: "Hajera designs with purpose shaping experiences that not only look beautiful, but feel right. Every screen they is guided by empathy, clarity, and a deep understanding of human behaviour.",
      link: "https://www.linkedin.com/in/hajera-bakhshi-graphic-designer/"
    },
    {
      title: "Every product we ship starts with these minds",
      name: "Saqib Hussain",
      position: "Full Stack Developer",
      image: team1,
      desc: "From backend logic to frontend polish, Saqib Hussain brings complete solutions to life. He's the bridge between design, data, and seamless user experiences.",
      link: "https://www.linkedin.com/in/saqib-hussain-204682184/?originalSubdomain=pk"
    },
    {
      title: "Driven by code. United by vision",
      name: "Shahab Hussain",
      position: "Frontend Developer",
      image: team2,
      desc: "Shahab transforms ideas into intuitive interfaces, bridging design and technology to create seamless, human-centered digital experiences.",
      link: "https://www.linkedin.com/in/shahab-hussain-5668a0286/"
    },
    {
      title: "The talent turning ideas into impact",
      name: "Kamran Jalil",
      position: "Flutter Developer",
      image: team3,
      desc: "Kamran has high performance mobile apps with clean code and beautiful UI, He bridges creativity and functionality across platforms. He helps out teammates with a quick debugging tip.",
      link: "https://www.linkedin.com/in/kamran-jalil-665910210/"
    },
    {
      title: "Passionate creators. Skilled builders",
      name: "Afaq Zahir",
      position: "Flutter Developer",
      image: team4,
      desc: "A problem solver at heart, Afaq Zahir builds fast, scalable mobile apps with precision and care. Their work blends technical depth with a seamless user experience.",
      link: "https://www.linkedin.com/in/afaqxdev"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  return (
    <div className='relative bg-[#1717179b] pb-6'>
      {/* Content container */}
      <div className="flex items-center mt-32 relative z-10">
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
          
          {/* Right Column - Profile Card */}
          <div className="flex flex-col items-center justify-center p-4">
            <ProfileCard
              name={teamMembers[currentSlide].name}
              title={teamMembers[currentSlide].position}
              handle={teamMembers[currentSlide].position.toLowerCase().replace(/\s+/g, '')}
              status="Online"
              contactText="View Profile"
              avatarUrl={teamMembers[currentSlide].image}
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => window.open(teamMembers[currentSlide].link, '_blank')}
            />
              <div className=' flex items-center gap-2 mt-4'>
            <button className=' text-white py-2 px-5 rounded-md bg-[#d6d6d62b]' onClick={prevSlide}>Previous</button>
            <button className=' text-white py-2 px-5 rounded-md bg-[#d6d6d62b]' onClick={nextSlide}>Next</button>
          </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Team;