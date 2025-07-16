import React from 'react'
import main1 from '../DevelopmentCenter/Assets/Group.png'
const Feature = () => {
  return (
    <div className=' md:mx-24 mx-4 mt-32  '>
     <div>
        <h1 className=' text-[#0C97BD] md:text-[43px] text-[22px] font-bold'>Features</h1>
        <p className=' text-[#606060] md:text-[22px] text-[14px] font-normal'>Presented here is an exhaustive overview of the sophisticated features encapsulated within our application, meticulously crafted to elevate user experience and meet the diverse needs of our discerning user base.</p>
     </div>
     <div className='pt-14'>
     <img src={main1} alt="" />
     </div>
     
    </div>
  )
}

export default Feature