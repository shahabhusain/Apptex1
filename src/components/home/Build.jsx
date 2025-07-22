import React from 'react'
import { Link } from 'react-router-dom'

const Build = () => {
  return (
    <div className=' flex flex-col items-center justify-center gap-y-4 h-[470px] w-full'>
      <h1 className=' md:text-[56px] text-[40px] font-[800] text-white max-w-[775px] text-center'><span className=' font-[400]'>Let’s Build</span> Something <span className=' bg-gradient-to-l from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent'>Great Together!</span> </h1>
      <Link to="/contact" className=' py-3 px-6 rounded-md bg-white text-[14px] font-[600] text-black'>CONTACT NOW</Link>
    </div>
  )
}

export default Build