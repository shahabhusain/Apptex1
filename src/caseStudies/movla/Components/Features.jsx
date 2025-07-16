import React from 'react'
import side from '../Assets/OBJECTS.png'
const Features = () => {
  return (
    <div className=' md:mx-24 mx-4 flex flex-col gap-5 mt-20'>
        <h1 className=' text-[#B99762] md:text-[40px] text-[24px] font-bold text-center'>Features</h1>
        <p className=' text-[#606060] md:text-[20px] text-[12px] font-normal text-center'>Presented here is an exhaustive overview of the sophisticated features encapsulated within our application, meticulously crafted to elevate user experience and meet the diverse needs of our discerning user base.</p>
        <img className='' src={side} alt="" />
    </div>
  )
}

export default Features