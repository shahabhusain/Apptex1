import React from 'react'

const OurMission = () => {
  return (
    <div className=' flex flex-col bg-[#22222292] p-5 rounded-md md:flex-row md:items-center justify-between w-[90%] mx-auto md:mt-32 mt-12'>
          <div className=' flex flex-col gap-3'>
          <h1 className=' py-1 px-4 bg-[#4FAD2E1A] text-[#4FAD2E] text-[16px] w-fit font-[600]'>Why We Exist </h1>
          <h1 className='  text-[32px] font-[400] md:text-center text-white'>OUR <span className='bg-gradient-to-l from-orange-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent font-[800]'>MISSION</span></h1>
          </div>
          <p className=' text-[16px] font-[400] text-[#ffffff] w-[80%]'>With years of industry experience, our mission is to empower startups, SMEs, and enterprises with cutting-edge technology and creative digital strategies that drive measurable growth. From building intuitive mobile applications to crafting user-friendly websites and executing high-converting marketing campaigns, we bring a holistic approach to every project.</p>

    </div>
  )
}

export default OurMission