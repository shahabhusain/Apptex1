import React from 'react'

const OurMission = () => {
  return (
    <div className=' flex flex-col bg-[#22222292] p-5 rounded-md md:flex-row md:items-center justify-between w-[90%] mx-auto md:mt-32 mt-12'>
          <div className=' flex flex-col gap-3'>
          <h1 className=' py-1 px-4 bg-[#4FAD2E1A] text-[#4FAD2E] text-[16px] w-fit font-[600]'>Why We Exist </h1>
          <h1 className='  text-[32px] font-[400] md:text-center text-white'>OUR <span className='bg-gradient-to-l from-orange-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent font-[800]'>MISSION</span></h1>
          </div>
          <p className=' text-[16px] font-[400] text-[#ffffff] w-[80%]'>Driven by innovation and excellence, we provide top-tier web, mobile, and cloud solutions that elevate businesses. Our mission is to turn bold ideas into reality through seamless execution, ensuring long-term success in the digital world.</p>

    </div>
  )
}

export default OurMission