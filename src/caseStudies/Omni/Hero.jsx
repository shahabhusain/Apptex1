import React from 'react'
import logo from '../Omni/Assets/Omni Logo.jpg'
import side from '../Omni/Assets/Group 973.png'
import btn from '../Omni/Assets/Button.png'
import btn1 from '../Omni/Assets/Button (1).png'
import { ScrollRestoration } from 'react-router-dom'
const Hero = () => {
  return (
    <div className=' bg-[#F8F8F8]'>
      <ScrollRestoration />
        <div className='  md:flex block justify-between '>
        <div className=' flex flex-col gap-8 md:ml-24 mx-4 justify-center  md:relative md:bottom-16'>
            <img className=' w-[92px] h-[93px]' src={logo} alt="" />
           <div>
           <button className=' border-[1px] py-2 hover:bg-[#f2935c] hover:text-white duration-300 transition-all ease-in-out border-[#EF6A1F] rounded-[5px] md:text-[35px] sm:text-[25px] text-[17px] font-[600] text-[#EF6A1F] px-8'>Case Study</button>
           </div>
            <div>
            <h1 className=' text-[#EF6A1F] md:text-[45px] sm:text-[35px] text-[25px] '>OMNI</h1>
            <h2 className=' md:text-[45px] sm:text-[35px] text-[25px] font-[600]'>Mobile App</h2>
            </div>
            <p className=' text-[#272727] md:text-[20px] text-[14px] font-[400]'>The Barber App streamlines bookings, services, and product sales for barbers, offering customers a seamless experience in one platform.</p>
            <div className=" flex items-center gap-3 md:w-[400px] w-[255px]">
        <a href="https://apps.apple.com/us/app/omni-connects/id6444658082"><img src={btn} alt="" /></a>
        <a href=" https://play.google.com/store/apps/details?id=com.omni.main"><img src={btn1} alt="" /></a>
      </div>
        </div>
          <img className=' md:max-w-[795px] md:pt-0 pt-10' src={side} alt="" />
    </div>
    </div>
  )
}

export default Hero