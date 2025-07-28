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
    { img: img1, title:"Skiwit" },
    { img: img2,title:"Omni"  },
    { img: img3,title:"Development Center"  },
    { img: img4, title:"CheapSkate"   },
    { img: img5, title:"WinnerWins"  },
    { img: img6,title:"Askmid"   },
    { img: img7,title:"Muala"   },
    { img: img8, title:"Localcaregiver"    },
  ];

  // Duplicate array to create infinite loop effect
  const loopItems = [...Technology, ...Technology];

  return (
    <div className="w-[80%] border-[1px] border-[#ffffff2e] bg-[#3f3e3e9b] py-12 mx-auto mt-12 overflow-hidden">
        <h1 className=' uppercase text-[50px] font-bold text-white text-center'>Trusted by Leading Brands</h1>
      <div className="relative">
        <div className="flex gap-32 animate-marquee whitespace-nowrap mt-6">
          {loopItems.map((item, index) => (
             <div className=' flex gap-2 items-center'>
                 <img
              key={index}
              className=" w-[50px] object-contain "
              src={item.img}
              alt={`tech-${index}`}
            />
            <h1 className=' text-[30px] font-semibold text-[#a9a9a9]'>{item.title}</h1>
             </div>
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
              transform: translateX(-100%);
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
