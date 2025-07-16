import React from 'react'

const Solution = () => {
  return (
    <div className=' md:mx-24 mx-4 my-20 '>
        <h1 className=' md:text-[42px] sm:text-[32px] text-[22px] font-[700] text-[#EF6A1F]'>Solution <span className=' font-[400] text-black'>We Provided</span></h1>
        <p className=' text-[#606060] md:text-[17px] text-[13px] font-[500]'>We deliver streamlined solutions, enhancing app development by seamlessly addressing security, performance, and user experience challenges, keeping pace with evolving technology and user expectations.</p>

        <div className=' flex flex-col gap-8 pt-8'>

        <div className=' flex gap-4'>
            <h1 className=' text-[#EF6A1F] text-[20px] font-medium'>1</h1>
            <div>
                <h2 className=' text-[#EF6A1F] text-[20px] font-medium'>Geolocation Integration</h2>
                <p className=' text-[#606060] text-[17px] font-[500]'>Utilized advanced GPS integration techniques to accurately pinpoint userlocations and display nearby barbers/shops on the map.</p>
            </div>
        </div>


        <div className=' flex gap-4'>
            <h1 className=' text-[#EF6A1F] text-[20px] font-medium'>2</h1>
            <div>
                <h2 className=' text-[#EF6A1F] text-[20px] font-medium'>Dynamic User Roles</h2>
                <p className=' text-[#606060] text-[17px] font-[500]'>Employed a robust data management system and conditional rendering toseamlessly switch between freelance barber and regular user modes.</p>
            </div>
        </div>

        <div className=' flex gap-6'>
            <h1 className=' text-[#EF6A1F] text-[20px] font-medium'>3</h1>
            <div>
                <h2 className=' text-[#EF6A1F] text-[20px] font-medium'>Complex Financial Transactions</h2>
                <p className=' text-[#606060] text-[17px] font-[500]'>Implemented a secure and transparent wallet system with thorough verification processes for withdrawal requests and admin approval procedures.</p>
            </div>
        </div>

        <div className=' flex gap-4'>
            <h1 className=' text-[#EF6A1F] text-[20px] font-medium'>4</h1>
            <div>
                <h2 className=' text-[#EF6A1F] text-[20px] font-medium'>Real-time Communication</h2>
                <p className=' text-[#606060] text-[17px] font-[500]'>Utilized Firebase Streams to enable real-time messaging andnotifications, providing a seamless chat experience.</p>
            </div>
        </div>

        <div className=' flex gap-4'>
            <h1 className=' text-[#EF6A1F] text-[20px] font-medium'>5</h1>
            <div>
                <h2 className=' text-[#EF6A1F] text-[20px] font-medium'>Scheduling and Booking Logic</h2>
                <p className=' text-[#606060] text-[17px] font-[500]'>Developed an intuitive booking system, enabling barbers/shopsto view and respond to booking requests promptly.</p>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Solution