import React from 'react'
import side from '../Asmid/Assets/777.png'
const Booking = () => {
  return (
    <div className=' md:mx-24 mt-32 mx-4 '>
       <div className="md:flex block justify-between items-center">
       <div className=' md:w-[50%] w-[70%] mx-auto'>
            <img src={side} alt="" />
        </div>
       <div className=' md:w-[45%] md:pt-0 pt-8'>
       <h1 className='text-[#1D67D5] md:text-[43px] text-[22px] font-bold'>Announcements and Sessions</h1>
       <p className=' text-[#757575] md:text-[20px] text-[13px] font-normal'>· Admins can make announcements, schedule sessions, and users can join through the app.</p>
       </div>
       </div>
    </div>
  )
}

export default Booking