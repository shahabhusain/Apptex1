import React from 'react'
import img1 from '../../assets/icon/img1.png';
import img2 from '../../assets/icon/img2.png';
import img3 from '../../assets/icon/img3.png';
import img4 from '../../assets/icon/img4.png';
import img5 from '../../assets/icon/img5.png';
import img6 from '../../assets/icon/img6.png';
import img7 from '../../assets/icon/img7.png';
import img8 from '../../assets/icon/img8.png';
import img9 from '../../assets/icon/img9.png';
const Technology = () => {
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
    <div className=' w-[90%] mx-auto flex flex-col items-center justify-center'>
          <h1 className='bg-gradient-to-l md:text-start from-orange-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-[42px] text-center font-[700] mt-20'>
        Technologies We Specialize In!
      </h1>

      {/* Infinite Vertical Scroll */}
      <div className='relative overflow-hidden mt-12'>
        <div className='flex  items-center gap-6 md:w-[1200px] w-[200px] animate-scroll'>
          {Technology.concat(Technology).map((item, index) => (
            <img key={index} className='w-[100px]' src={item.img} alt='' />
          ))}
        </div>
      </div>
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
  )
}

export default Technology