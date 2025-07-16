import React from 'react'
import side from '../DevelopmentCenter/Assets/Group 7771 (1).png'
const Booking = () => {
  return (
    <div className=' md:mx-24 mt-32 mx-4'>
       <div className="md:flex block justify-between items-center">
       <div className=''>
            <img src={side} alt="" />
        </div>
       <div className=' md:w-[45%] md:pt-0 pt-8'>
       <h1 className='text-[#0C97BD] md:text-[43px] text-[22px] font-bold'>Seamless Booking Experience for Guardians</h1>
       <p className=' text-[#606060] md:text-[22px] text-[13px] font-normal'>Guardians effortlessly create profiles for their children within the app. They have the freedom to choose coaches, align sessions with available time slots, and tailor session durations (30, 45, or 60 minutes) and course lengths (1, 2, 3, or 4 weeks). Additionally, they can personalize bookings by adding specific comments for coaches and select the session type—be it an online video call, in-home session, or a community gathering—adapting to individual preferences and needs.
       </p>
       </div>
       </div>
    </div>
  )
}

export default Booking