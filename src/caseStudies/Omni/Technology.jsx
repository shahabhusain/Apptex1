import React from 'react'
import side1 from '../Omni/Assets/side1.png'
import side2 from '../Omni/Assets/side2.png'
import side3 from '../Omni/Assets/side3.png'
import side4 from '../Omni/Assets/side4.png'
import side5 from '../Omni/Assets/side5.png'
const Technology = () => {
  return (
    <div className=' md:mx-24 mx-4 flex flex-col gap-4 mt-12'>
        <h1 className=' text-[#EF6A1F] md:text-[47px] sm:text-[37px] text-[27px] font-bold'>Technology <span className=' text-black md:text-[57px] sm:text-[37px] text-[27px] font-normal'>Used</span></h1>
        <p className=' md:text-[22px] text-[12px] text-[#606060] font-normal'>For the omni project, several technologies are used to create a seamless and robust experience for users. These technologies include:</p>
        <div className=' grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 md:pt-16 gap-4 md:mx-0 mx-auto '>
            <div className=' flex flex-col items-center justify-center gap-3'>
                <img src={side1} alt="" />
                <h1 className=' text-[#22222A] md:text-[22px] text-[15px] font-[600] '>Figma</h1>
                <p className=' text-[#606060] text-[16px] font-[500] text-center'>Open-source SDK for building mobile, web, and desktop apps with a single codebase.</p>
            </div>
            <div className=' flex flex-col items-center justify-center gap-3'>
                <img src={side2} alt="" />
                <h1 className=' text-[#22222A] md:text-[22px] text-[15px] font-[600] '>Stripe </h1>
                <p className=' text-[#606060] text-[16px] font-[500] text-center'>Integration with Stripe streamlined secure payment processing within our app.</p>
            </div>
            <div className=' flex flex-col items-center justify-center gap-3'>
                <img src={side3} alt="" />
                <h1 className=' text-[#22222A] md:text-[22px] text-[15px] font-[600] '>Node js </h1>
                <p className=' text-[#606060] text-[16px] font-[500] text-center'>Open-source SDK for building mobile, web, and desktop apps with a single codebase.</p>
            </div>
            <div className=' flex flex-col items-center justify-center gap-3'>
                <img src={side4} alt="" />
                <h1 className=' text-[#22222A] md:text-[22px] text-[15px] font-[600] '>firebase </h1>
                <p className=' text-[#606060] text-[16px] font-[500] text-center'>Firebase provided a reliable backend for data storage, authentication, and real-time communication.</p>
            </div>
            <div className=' flex flex-col items-center justify-center gap-3'>
                <img src={side5} alt="" />
                <h1 className=' text-[#22222A] md:text-[22px] text-[15px] font-[600] '>flutter  </h1>
                <p className=' text-[#606060] text-[16px] font-[500] text-center'>Flutter enabled a single codebase for Android and iOS app development.</p>
            </div>
        </div>
    </div>
  )
}

export default Technology