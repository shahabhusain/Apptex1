import React from 'react'
import MetaTags from '../MetaTags'

const Title = () => {
  return (
      <div className='md:pt-[73px] pt-[67px]'>
    <MetaTags title="HOW WE DELIVER"  description="Welcome to our learning center where we discuss technical topics and industry insights in simple terms for you."/>
    <h1 className='  md:text-[54px] text-[40px] font-[400] py-2 text-center text-white mt-20 uppercase max-w-[776px] mx-auto '> <span className='bg-gradient-to-l from-orange-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent font-[800]'>HOw</span> WE DELIVER</h1>
    <p className=' text-[16px] font-[400] text-center text-white'>Welcome to our learning center where we discuss technical topics and industry insights in simple terms for you.</p>
      </div>
  )
}

export default Title