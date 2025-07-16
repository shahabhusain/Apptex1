import React from 'react'
import side1 from '../Assets/flutter.png'
import side2 from '../Assets/react.png'
import side3 from '../Assets/nodejs.png'
import side4 from '../Assets/aws.png'
import side5 from '../Assets/mongodb.png'
import side6 from '../Assets/figma.png'
const Technology = () => {
  return (
    <div className=''>
      <div className=' md:mx-32 mx-4 flex flex-col gap-4  py-4 rounded-[20px]'>
        <h1 className=' text-[#EF6A1F] md:text-[47px] sm:text-[37px] text-[27px] font-bold'>Technology <span className=' text-black md:text-[47px] sm:text-[37px] text-[27px] font-normal'>Used</span></h1>
        <p className=' md:text-[22px] text-[12px] text-[#606060] font-normal'>For the Mvuala project, several technologies are used to create a seamless and robust experience for users. These technologies include Flutter, ReactJS, Node.js, AWS, and MongoDB. Let’s explore each of these technologies and their respective roles in the project:</p>
        <div className=' grid md:grid-cols-6 sm:grid-cols-2 grid-cols-1 md:pt-5 gap-12  '>
            <div className=' flex flex-col items-center justify-center gap-3'>
                <img src={side1} alt="" />
                <h1 className=' text-[#22222A] md:text-[27px] text-[15px] font-[600] '>flutter </h1>
                <p className=' text-[#606060] text-[16px] font-normal text-center'>Open-source SDK for building mobile, web, and desktop apps with a single codebase.</p>
            </div>
            <div className=' flex flex-col items-center justify-center gap-3'>
                <img src={side2} alt="" />
                <h1 className=' text-[#22222A] md:text-[27px] text-[15px] font-[600] '>ReactJS </h1>
                <p className=' text-[#606060] text-[16px] font-normal text-center'>JavaScript library for creating dynamic and interactive web applications.</p>
            </div>
            <div className=' flex flex-col items-center justify-center gap-3'>
                <img src={side3} alt="" />
                <h1 className=' text-[#22222A] md:text-[27px] text-[15px] font-[600] whitespace-nowrap '>Node.js </h1>
                <p className=' text-[#606060] text-[16px] font-normal text-center'>Server-side JavaScript runtime for building scalable APIs and backend applications.</p>
            </div>
            <div className=' flex flex-col items-center justify-center gap-3'>
                <img src={side4} alt="" />
                <h1 className=' text-[#22222A] md:text-[27px] text-[15px] font-[600] '>AWS</h1>
                <p className=' text-[#606060] text-[16px] font-normal text-center'>Cloud computing platform for hosting and managing applications, using S3 for video storage.</p>
            </div>
            <div className=' flex flex-col items-center justify-center gap-3'>
                <img src={side5} alt="" />
                <h1 className=' text-[#22222A] md:text-[27px] text-[15px] font-[600] '>MongoDB </h1>
                <p className=' text-[#606060] text-[16px] font-normal text-center'>NoSQL database for flexible and scalable document-oriented data storage.</p>
            </div>

            <div className=' flex flex-col items-center justify-center gap-3'>
                <img src={side6} alt="" />
                <h1 className=' text-[#22222A] md:text-[27px] text-[15px] font-[600] '>Figma </h1>
                <p className=' text-[#606060] text-[16px] font-normal text-center'>Design tools Figma has been used to create and prototype. </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Technology