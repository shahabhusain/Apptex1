import React from 'react'
import side from '../Omni/Assets/Frame 1000009903.png'
const Chat = () => {
  return (
    <div className=' md:mx-24 mx-4 md:flex md:flex-row flex-col-reverse justify-between items-center gap-7 mt-32'>
    <img className='' src={side} alt="" />
    <div className=''>
        <h1 className=' text-[#272727] md:text-[40px] sm:text-[30px] text-[20px] font-bold pt-7 md:pt-0'><span className=' text-[#EF6A1F]'>Chat System</span> for Communication</h1>
        <p className=' text-[#606060] md:text-[22px] text-[12px] font-normal pt-4 '>To optimize user communication and streamline the booking process, we integrated a real-time chat system into our booking app, fostering seamless interaction between users and service providers.</p>
    </div>
</div>
  )
}

export default Chat