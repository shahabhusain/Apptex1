import React from 'react';
import img1 from '../../assets/icon/ski.png';
import img2 from '../../assets/icon/Omni.png';
import img3 from '../../assets/icon/dev.png';
import img4 from '../../assets/icon/cheap.png';
import img5 from '../../assets/icon/winner.png';
import img6 from '../../assets/icon/ask.png';
import img7 from '../../assets/icon/muala.png';
import img8 from '../../assets/icon/local.png';

const Trust = () => {
  const Technology = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
  ];

  // Duplicate array to create infinite loop effect
  const loopItems = [...Technology, ...Technology];

  return (
    <div className="w-[80%] border-[1px] border-[#ffffff2e] bg-[#1717179b] py-12 mx-auto mt-12 overflow-hidden">
        <h1 className=' uppercase text-[50px] font-bold text-white text-center'>Trusted by Leading Brands</h1>
      <div className="relative">
        <div className="flex gap-20 animate-marquee whitespace-nowrap mt-6">
          {loopItems.map((item, index) => (
            <img
              key={index}
              className="w-[100px] object-contain "
              src={item.img}
              alt={`tech-${index}`}
            />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 12s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Trust;
