import React, { useState } from 'react';
import services1 from '../../assets/services/services.jpg'
import services2 from '../../assets/services/services1.jpg'
import services3 from '../../assets/services/services2.jpeg'
import services4 from '../../assets/services/services3.jpg'
import services5 from '../../assets/services/services4.jpg'
import services6 from '../../assets/services/services5.jpg'
import services7 from '../../assets/services/services6.jpg'
import services8 from '../../assets/services/services7.jpg'
import MetaTags from '../MetaTags';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const handleMouseEnter = (serviceName) => {
    setHoveredService(serviceName);
  };

  const handleMouseLeave = () => {
    setHoveredService(null);
  };

  return (
       <div>
        <MetaTags title="Market Driven Services By AppTex" description="Our experts provide you with highly interactive and seamless UI/UX designs, scalable mobile applications, and robust websites that are highly functional and interactive at the same time. Beyond our IT services, our marketing Team provides you with next-gen marketing solutions to amplify your business. Whether it's SEO, PPC, ASO, or SMM, our digital marketing specialists craft data-driven strategies to ensure your brand not only attracts an audience but thrives in market competitive market." image={services1} />
         <div className=" md:mt-32 mt-12 px-4 md:px-12 md:py-20 ">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-4 items-center text-center justify-center mt-6">
        <div className="md:w-[55%] flex flex-col gap-4 md:pl-6">
          <h1 className="text-3xl md:text-[54px] font-[900] text-white leading-tight">
            <span className="bg-gradient-to-l from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Market Driven 
            </span>{" "}
              Services By AppTex
          </h1>
          <p className="text-[14px] text-white md:text-[20px] font-[400]">
      We deliver seamless UI/UX designs, scalable mobile apps, and robust websites. Our marketing team amplifies your business with data-driven strategies across SEO, PPC, ASO, and SMM, ensuring your brand thrives in a competitive market.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="flex flex-col items-center justify-center gap-12 mt-12">
        
        {/* UI/UX Designing */}
        <h1
          onMouseEnter={() => handleMouseEnter('uiux')}
          onMouseLeave={handleMouseLeave}
          className="md:text-[46px] text-[24px] cursor-pointer font-[700] relative w-full transition-all duration-300"
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
                className="absolute md:block hidden w-[300px] h-[130px] object-cover -top-8 rounded-md left-32 animate-float" 
                style={{ animationDuration: '3s' }}
              />
              <img 
                src={services2} 
                alt="" 
                className="absolute md:block hidden w-[300px] h-[130px] object-cover top-72 rounded-md right-12 animate-float" 
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
          className="md:text-[46px] text-[24px] cursor-pointer font-[700] relative w-full transition-all duration-300"
          style={{
            color: hoveredService === 'web' ? 'white' : 'transparent',
            WebkitTextStroke: '2px white',
            textStroke: '2px white'
          }}
        >
          {hoveredService === 'web' && (
            <>
              <img 
                src={services4} 
                alt="" 
                className="absolute md:block hidden w-[300px] h-[130px] object-cover rounded-md -top-8 left-32 animate-float" 
                style={{ animationDuration: '3s' }}
              />
              <img 
                src={services3} 
                alt="" 
                className="absolute md:block hidden w-[300px] h-[130px] object-cover rounded-md top-32 right-32 animate-float" 
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
          className="md:text-[46px] text-[24px] cursor-pointer font-[700] relative w-full transition-all duration-300"
          style={{
            color: hoveredService === 'app' ? 'white' : 'transparent',
            WebkitTextStroke: '2px white',
            textStroke: '2px white'
          }}
        >
          {hoveredService === 'app' && (
            <>
                <img 
                src={services5} 
                alt="" 
                className="absolute md:block hidden w-[300px] h-[130px] object-cover rounded-md -top-32 left-32 animate-float" 
                style={{ animationDuration: '3s' }}
              />
              <img 
                src={services6} 
                alt="" 
                className="absolute md:block hidden w-[300px] h-[130px] object-cover rounded-md top-20 right-12 animate-float" 
                style={{ animationDuration: '3s', animationDelay: '0.5s' }}
              />
            </>
          )}
          <span className="flex items-center justify-center">App Development</span>
        </h1>

        {/* Backend Development */}
        <h1
          onMouseEnter={() => handleMouseEnter('seo')}
          onMouseLeave={handleMouseLeave}
          className="md:text-[46px] text-[24px] cursor-pointer font-[700] relative w-full transition-all duration-300"
          style={{
            color: hoveredService === 'seo' ? 'white' : 'transparent',
            WebkitTextStroke: '2px white',
            textStroke: '2px white'
          }}
        >
          {hoveredService === 'seo' && (
            <>
              <img 
                src={services7} 
                alt="" 
                className="absolute md:block hidden w-[300px] h-[130px] object-cover rounded-md -top-8 left-12 animate-float" 
                style={{ animationDuration: '3s' }}
              />
              <img 
                src={services8} 
                alt="" 
                className="absolute md:block hidden w-[300px] h-[130px] object-cover rounded-md -top-8 right-12 animate-float" 
                style={{ animationDuration: '3s', animationDelay: '0.5s' }}
              />
            </>
          )}
          <span className="flex items-center justify-center">Search Engine Optimization</span>
        </h1>

      </div>
    </div>
       </div>
  );
};

export default Services;