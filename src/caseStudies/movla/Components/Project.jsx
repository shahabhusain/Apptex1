import React from 'react'
import side from '../Assets/iPhone 12 Pro Max.png'
const Project = () => {
  return (
    <div className=' md:mx-24 mx-4 mt-32 '>
      <div className=' md:flex block justify-between items-center'>
        <div className=''>
        <img className='' src={side} alt="" />
        </div>
      <div className=' md:w-[60%] pt-7 md:pt-0'>
       <h1 className=" md:text-[43px] sm:text-[25px] text-[20px] font-normal">Project <span className=' text-[#B99762] font-bold'>Overview</span></h1>
       <p className=' text-[#606060] md:text-[22px] text-[14px] font-normal'>Mvuala is an innovative mobile application that offers users a platform to create, share, and enjoy short videos and films. The application allows users to develop their own short videos using their smartphones and interact with a wide range of entertaining content created by other users. 
       </p>
       <p className=' text-[#606060] md:text-[22px] text-[14px] font-normal mt-6'>The app fosters a vibrant community of content creators and viewers who engage with each other’s creations. With a focus on video optimization and processing for enabling seamless video editing and playback. The project consists of two main parts: a mobile application built with Flutter and a web version developed using ReactJS. The backend is powered by Node.js,</p>
       </div>
      </div>
    </div>
  )
}

export default Project