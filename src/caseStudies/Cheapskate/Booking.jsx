import React from 'react'
import side from '../Cheapskate/Assets/Group 7771 (1).png'
const Booking = () => {
  return (
    <div className=' md:mx-24 mt-32 mx-4'>
       <div className="md:flex block justify-between items-center">
       <div className=' md:w-[50%] w-[50%] mx-auto'>
            <img src={side} alt="" />
        </div>
       <div className=' md:w-[45%] md:pt-0 pt-8'>
       <h1 className='text-[#5EACF9] md:text-[43px] text-[22px] font-bold'>Creative Crowdfunding Campaigns</h1>
       <p className=' text-[#606060] md:text-[22px] text-[13px] font-normal'>Users can launch and participate in campaigns to raise funds for various experiences.
       </p>
       </div>
       </div>
    </div>
  )
}

export default Booking