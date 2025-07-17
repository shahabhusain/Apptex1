import React from 'react';
import RotatingText from '../../../Reactbits/RotatingText/RotatingText';

const Hero = () => {
  return (
    <div>
      {/* Content Container */}
      <div className="w-full flex flex-col items-center justify-center px-4 md:px-12">
        <h1 className="text-[48px] md:text-[120px] text-center font-bold text-white leading-[1.1] md:leading-[1]">
          <span className="font-normal block">We help</span>
          <span className='mt-4 flex justify-center'>
            <div className=' w-full flex items-center justify-center'>
              <RotatingText
                texts={['Innovative', 'Scalable', 'Secure', 'Cutting-edge']}
                mainClassName="text-white bg-pink-500 text-center p-5 rounded-md w-[800px] text-center font-bold"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </span>
          <span className="font-normal block">digital solutions.</span>
        </h1>
        <p className="text-[#949494] text-center text-[18px] md:text-[20px] font-medium mt-6 md:mt-8 max-w-[800px]">
          Simple, Smart, Scalable, and User-Focused Digital Solutions for Web and Mobile Technologies.
        </p>
      </div>
    </div>
  );
};

export default Hero;