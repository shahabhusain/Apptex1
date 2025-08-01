import React from 'react'
import MetaTags from '../MetaTags'

const OurStory = () => {
  return (
    <div className=' flex bg-[#22222292] rounded-md p-5 flex-col md:flex-row md:items-center justify-between w-[90%] mx-auto md:mt-32 mt-5'>
          <MetaTags title="OUR STORY" description="In 2020, during the pandemic, AppTex was started by two friends with a simple goal—to build smart and effective digital solutions. What began as a small idea quickly grew into a successful company, helping businesses create better websites, apps, and online services. With hard work and a passion for innovation, AppTex has grown into a trusted name, turning ideas into reality and making technology easier for businesses." />
          <div className=' flex flex-col gap-3'>
          <h1 className=' py-1 px-4 bg-[#bbbbbb1a] text-[#4FAD2E] text-[16px] w-fit font-[600]'>How it Started</h1>
          <h1 className='  text-[32px] font-[400] md:text-center text-white'>OUR <span className='bg-gradient-to-l from-orange-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent font-[800]'>STORY</span></h1>
          </div>
          <p className=' text-[16px] font-[400] text-[#ffffff] w-[80%]'>In 2020, during the pandemic, AppTex was started by two friends with a simple goal—to build smart and effective digital solutions. What began as a small idea quickly grew into a successful company, helping businesses create better websites, apps, and online services. With hard work and a passion for innovation, AppTex has grown into a trusted name, turning ideas into reality and making technology easier for businesses.</p>

    </div>
  )
}

export default OurStory