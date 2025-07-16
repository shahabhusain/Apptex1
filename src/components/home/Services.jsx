import React, { useState } from 'react';
import skiwit from '../../assets/skiwit.png'
import local from '../../assets/local.png'
import services1 from '../../assets/services/services.jpg'
import services2 from '../../assets/services/services1.jpg'
import services3 from '../../assets/services/services2.jpeg'
import Beams from '../../../Reactbits/Beams/Beams';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const handleMouseEnter = (serviceName) => {
    setHoveredService(serviceName);
  };

  const handleMouseLeave = () => {
    setHoveredService(null);
  };

  return (
       <div className=' relative'>
                <div style={{ width: '100%', height: '100vh', zIndex:"-1000" }}  className='  md:w-[85%] w-[97%] mx-auto'>
          
            <Beams  beamWidth={2}
    beamHeight={15}
    beamNumber={12}
    lightColor="#ffffff"
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={0} />
    </div>
         <div className=" absolute top-0 px-4 md:px-12 py-20 ">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 items-center text-center justify-center mt-6">
        <div className="md:w-[55%] flex flex-col gap-4 md:pl-6">
          <h1 className="text-3xl md:text-[54px] font-[900] text-white leading-tight">
            <span className="bg-gradient-to-l from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Services
            </span>{" "}
            We provide
          </h1>
          <p className="text-[14px] text-white md:text-[20px] font-[400]">
            From UI/UX to cutting-edge Web and App solutions, we deliver
            high-performance solutions, turning your ideas into innovative
            digital experiences.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="flex flex-col items-center justify-center gap-12 mt-12">
        
        {/* UI/UX Designing */}
        <h1
          onMouseEnter={() => handleMouseEnter('uiux')}
          onMouseLeave={handleMouseLeave}
          className="text-[46px] cursor-pointer font-[700] relative w-full transition-all duration-300"
          style={{
            color: hoveredService === 'uiux' ? 'white' : 'transparent',
            WebkitTextStroke: '2px white',
            textStroke: '2px white'
          }}
        >
          {hoveredService === 'uiux' && (
            <>
              <img 
                src={services1} 
                alt="" 
                className="absolute w-[300px] h-[130px] object-cover -top-8 rounded-md left-32 animate-float" 
                style={{ animationDuration: '3s' }}
              />
              <img 
                src={services3} 
                alt="" 
                className="absolute w-[300px] h-[130px] object-cover top-72 rounded-md right-32 animate-float" 
                style={{ animationDuration: '3s', animationDelay: '0.5s' }}
              />
            </>
          )}
          <span className="flex items-center justify-center">UI/UX Designing</span>
        </h1>

        {/* Web Development */}
        <h1
          onMouseEnter={() => handleMouseEnter('web')}
          onMouseLeave={handleMouseLeave}
          className="text-[46px] cursor-pointer font-[700] relative w-full transition-all duration-300"
          style={{
            color: hoveredService === 'web' ? 'white' : 'transparent',
            WebkitTextStroke: '2px white',
            textStroke: '2px white'
          }}
        >
          {hoveredService === 'web' && (
            <>
              <img 
                src={services2} 
                alt="" 
                className="absolute w-[300px] h-[130px] object-cover rounded-md -top-8 left-32 animate-float" 
                style={{ animationDuration: '3s' }}
              />
              <img 
                src={services3} 
                alt="" 
                className="absolute w-[300px] h-[130px] object-cover rounded-md top-32 right-32 animate-float" 
                style={{ animationDuration: '3s', animationDelay: '0.5s' }}
              />
            </>
          )}
          <span className="flex items-center justify-center">Web Development</span>
        </h1>

        {/* App Development */}
        <h1
          onMouseEnter={() => handleMouseEnter('app')}
          onMouseLeave={handleMouseLeave}
          className="text-[46px] cursor-pointer font-[700] relative w-full transition-all duration-300"
          style={{
            color: hoveredService === 'app' ? 'white' : 'transparent',
            WebkitTextStroke: '2px white',
            textStroke: '2px white'
          }}
        >
          {hoveredService === 'app' && (
            <>
                <img 
                src={services2} 
                alt="" 
                className="absolute w-[300px] h-[130px] object-cover rounded-md -top-32 left-32 animate-float" 
                style={{ animationDuration: '3s' }}
              />
              <img 
                src={services3} 
                alt="" 
                className="absolute w-[300px] h-[130px] object-cover rounded-md top-20 right-32 animate-float" 
                style={{ animationDuration: '3s', animationDelay: '0.5s' }}
              />
            </>
          )}
          <span className="flex items-center justify-center">App Development</span>
        </h1>

        {/* Backend Development */}
        <h1
          onMouseEnter={() => handleMouseEnter('backend')}
          onMouseLeave={handleMouseLeave}
          className="text-[46px] cursor-pointer font-[700] relative w-full transition-all duration-300"
          style={{
            color: hoveredService === 'backend' ? 'white' : 'transparent',
            WebkitTextStroke: '2px white',
            textStroke: '2px white'
          }}
        >
          {hoveredService === 'backend' && (
            <>
              <img 
                src={services2} 
                alt="" 
                className="absolute w-[300px] h-[130px] object-cover rounded-md -top-8 left-32 animate-float" 
                style={{ animationDuration: '3s' }}
              />
              <img 
                src={services3} 
                alt="" 
                className="absolute w-[300px] h-[130px] object-cover rounded-md -top-8 right-32 animate-float" 
                style={{ animationDuration: '3s', animationDelay: '0.5s' }}
              />
            </>
          )}
          <span className="flex items-center justify-center">Backend Development</span>
        </h1>

      </div>
    </div>
       </div>
  );
};

export default Services;