import React from 'react'
import side from '../Omni/Assets/Group.png'
const Project = () => {
  return (
    <div className=' md:mx-24 mx-4 mt-20'>
      <div className=' flex flex-col gap-4'>
      <h1 className=' text-[#272727] md:text-[47px] sm:text-[37px] text-[27px] font-normal'>Project <span className=' text-[#EF6A1F] font-bold'>Overview</span></h1>
        <p className=' md:text-[22px] text-[#606060] text-[14px] font-normal'>Omni Connects is a revolutionary mobile and web application designed to transform the way users book barbers in their local area. The platform caters to three distinct user roles freelance barbers, barber shops, and regular users seeking barber services. By providing an intuitive and feature-rich interface.</p>
       <p className='  md:text-[22px] text-[#606060] text-[14px] font-normal'>Omni Connects aims to simplify the process of connecting users with skilled barbers in their vicinity. The platform also offers a unique twist by allowing freelance barbers and shops to showcase and sell their products through the same application, creating an all-in-one solution for barber services and product sales.</p>
       <p className='  md:text-[22px] text-[#606060] text-[14px] font-normal'>The application is built on two powerful platforms: a Mobile App developed using Flutter and Firebase, and a Website created with React and Firebase. These cutting-edge technologies ensure a seamless user experience across Android and iOS devices while delivering efficient and securedata management, real-time communication, and geolocation-based services.</p>
      </div>
    </div>
  )
}

export default Project