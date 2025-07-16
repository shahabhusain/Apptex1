import React from 'react'
import side from '../Omni/Assets/OBJECTS.png'
const Feature = () => {
  return (
    <div className=' md:mx-24 mx-4 mt-20 '>
        <div className=''>
            <h1 className=' md:text-[37px] sm:text-[40px] text-[27px] font-bold'>Features</h1>
            <p className=' md:text-[17px] font-[500] text-[16px]  text-[#606060] '>Presented here is an exhaustive overview of the sophisticated features encapsulated within our application, meticulously crafted to elevate user experience and meet the diverse needs of our discerning user base.</p>
        </div>
        <img className=' mx-auto md:max-w-[600px] mt-4' src={side} alt="" />
    </div>
  )
}

export default Feature