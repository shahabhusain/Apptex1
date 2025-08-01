import React from 'react';
import MetaTags from '../MetaTags';

const Crafting = () => {
  return (
    <div className='md:pt-[5.6rem] pt-12 h-[350ppx] px-4 md:px-20'>
      <MetaTags title="WHO ARE WE ?" description="    Apptex is a dynamic IT solutions provider, empowering businesses to grow through smart technology and impactful digital strategies. Founded with a vision to deliver quality-driven, customized tech solutions, we specialize in mobile app and web development, SEO, ASO, and social media marketing.

With a client-first mindset and a team of passionate professionals, we’ve helped businesses of all sizes unlock digital potential. Our journey is shaped by innovation, agility, and a commitment to excellence. Every line of code we write and every campaign we launch is aimed at delivering real value." />
      <h1 className='md:text-[54px] text-[30px] font-[800] py-2 text-center text-white md:mt-20 mt-10'>
        WHO ARE <span className='bg-gradient-to-l from-orange-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>WE ?</span>
      </h1>

      <p className='text-white text-center text-[14px] md:text-[18px] leading-relaxed max-w-4xl mx-auto'>
        Apptex is a dynamic IT solutions provider, empowering businesses to grow through smart technology and impactful digital strategies. Founded with a vision to deliver quality-driven, customized tech solutions, we specialize in mobile app and web development, SEO, ASO, and social media marketing.

With a client-first mindset and a team of passionate professionals, we’ve helped businesses of all sizes unlock digital potential. Our journey is shaped by innovation, agility, and a commitment to excellence. Every line of code we write and every campaign we launch is aimed at delivering real value.
      </p>
    </div>
  );
};

export default Crafting;
