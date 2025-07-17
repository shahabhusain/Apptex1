import React from 'react';
import val from '../../assets/val.png';
import img1 from '../../assets/icon/img1.png';
import img2 from '../../assets/icon/img2.png';
import img3 from '../../assets/icon/img3.png';
import img4 from '../../assets/icon/img4.png';
import img5 from '../../assets/icon/img5.png';
import img6 from '../../assets/icon/img6.png';
import img7 from '../../assets/icon/img7.png';
import img8 from '../../assets/icon/img8.png';
import img9 from '../../assets/icon/img9.png';

const Product = () => {
  const ValueData = [
    {
      img: val,
      title: 'UI/UX Designing',
      description: 'At Apptex, we create engaging, and functional UI/UX designs that enhance user experience and drive business growth. From user research to interactive prototypes, we blend creativity with data-driven insights to craft responsive, user-friendly designs.',
    },
    {
      img: val,
      title: 'Application Development',
      description: 'We build mobile apps designed to deliver real business impact. Our expertise spans cross-platform development, turning bold ideas into dynamic mobile experiences.',
    },
    {
      img: val,
      title: 'Web Development',
      description: 'We offer customised web development solutions, designed to meet the evolving needs of modern businesses. Whether it’s a simple landing page or a complex web application, our expertise ensures high-quality results.',
    },
    {
      img: val,
      title: 'Backend Design & Development',
      description: 'At Apptex, we build robust, scalable, and high-performance backend systems that power seamless digital experiences.',
    },
  ];

  const Technology = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
    { img: img9 },
  ];

  return (
    <div className='flex flex-col items-center justify-center gap-y-4 w-[90%] bg-[#1717179b] md:p-12 p-4  mx-auto my-20 rounded-2xl'>
      <h1 className='text-[32px] font-[800] text-center text-white'>
        Services{' '}
        <span className='bg-gradient-to-l from-orange-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent font-[800]'>
          We Deliver
        </span>
      </h1>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-6 mt-12'>
        {ValueData.map((item, index) => (
          <div key={index} className='border-[1px] border-[#2e2c2c] p-3 rounded-md'>
            <div className='bg-[#1717179b] p-12 flex flex-col gap-2'>
              <img className='w-[50px]' src={item.img} alt='' />
              <h1 className='text-[24px] font-[700] text-[#ffffff]'>{item.title}</h1>
              <p className='text-[#ffffff] text-[16px] font-[400]'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className='bg-gradient-to-l md:text-start text-center from-orange-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-[32px] font-[700] mt-20'>
        Technologies We Specialize In!
      </h1>

      {/* Infinite Vertical Scroll */}
      <div className='relative overflow-hidden mt-12'>
        <div className='flex  items-center gap-6 md:w-[600px] w-[200px] animate-scroll'>
          {Technology.concat(Technology).map((item, index) => (
            <img key={index} className='w-[100px]' src={item.img} alt='' />
          ))}
        </div>
      </div>

      {/* Tailwind Animation */}
      <style>
        {`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 8s linear infinite;
        }
        `}
      </style>
    </div>
  );
};

export default Product;
