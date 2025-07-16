import React from 'react';
import Beams from '../../../Reactbits/Beams/Beams';

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Background Beams */}
      <div className="md:w-[85%] w-[97%] mx-auto h-screen relative z-0" style={{ zIndex: -1000 }}>
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
      </div>

      {/* Content Container */}
      <div className="absolute top-32 left-0 w-full px-4 md:px-12">
          <h1 className="text-[48px] md:text-[120px] font-bold text-white leading-[1.1] md:leading-[1]">
            <span className="font-normal block">We help</span>
            <span className="bg-gradient-to-l from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent block">
              businesses
            </span>
            <span className="font-normal block">code the future.</span>
          </h1>
        <p className="text-[#949494] text-[18px] md:text-[20px] font-medium mt-6 md:mt-8 max-w-[800px]">
          Simple, Smart, Scalable, and User-Focused Digital Solutions for Web and Mobile Technologies.
        </p>
        </div>

    
      </div>
  );
};

export default Hero;