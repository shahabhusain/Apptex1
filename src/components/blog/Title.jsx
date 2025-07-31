import React from 'react'
import MetaTags from '../MetaTags'

const Title = () => {
  return (
      <div className='pt-[67px]'>
        <MetaTags title="HOW WE Deliver" description="Welcome to our learning center where we discuss technical topics and industry insights in simple terms for you." />

    <h1 className='  md:text-[54px] text-[40px] font-[800] py-2 text-center text-black uppercase max-w-[866px] mx-auto '><span className=' font-[400]'>HOW WE Deliver</span> <span className='bg-gradient-to-l from-orange-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>Deliver</span></h1>
    <p className=' text-[16px] font-[400] text-center'>Welcome to our learning center where we discuss technical topics and industry insights in simple terms for you.</p>
      </div>
  )
}

export default Title