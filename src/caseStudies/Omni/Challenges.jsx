import React from 'react'

const Challenges = () => {
  return (
    <div className=' md:mx-24 mx-4 mt-20 '>
        <h1 className=' md:text-[42px] sm:text-[32px] text-[22px] font-[700] text-[#EF6A1F]'>Challenges <span className=' font-[400] text-black'>We Face</span></h1>
        <p className=' text-[#606060] md:text-[17px] text-[13px] font-[500]'>App developers grapple with ongoing challenges in security, performance, and user experience, navigating the dynamic terrain of technology and user expectations.</p>

        <div className=' flex flex-col gap-8 pt-8'>

        <div className=' flex gap-4'>
            <h1 className=' text-[#EF6A1F] text-[20px] font-medium'>1</h1>
            <div>
                <h2 className=' text-[#EF6A1F] text-[20px] font-medium'>Geolocation Integration</h2>
                <p className=' text-[#606060] text-[17px] font-[500]'>Implementing real-time geolocation to display nearby barbers/shops based on user location required precise integration with GPS services.</p>
            </div>
        </div>


        <div className=' flex gap-4'>
            <h1 className=' text-[#EF6A1F] text-[20px] font-medium'>2</h1>
            <div>
                <h2 className=' text-[#EF6A1F] text-[20px] font-medium'>Dynamic User Roles</h2>
                <p className=' text-[#606060] text-[17px] font-[500]'>Enabling seamless switching between freelance barber and regular user modes posed a technical challenge,necessitating careful data handling and access control.</p>
            </div>
        </div>

        <div className=' flex gap-4'>
            <h1 className=' text-[#EF6A1F] text-[20px] font-medium'>3</h1>
            <div>
                <h2 className=' text-[#EF6A1F] text-[20px] font-medium'>Complex Financial Transactions</h2>
                <p className=' text-[#606060] text-[17px] font-[500]'>The wallet system needed to be robust, secure, and able to handle various financial operations,such as withdrawal requests and admin approvals.</p>
            </div>
        </div>

        <div className=' flex gap-4'>
            <h1 className=' text-[#EF6A1F] text-[20px] font-medium'>4</h1>
            <div>
                <h2 className=' text-[#EF6A1F] text-[20px] font-medium'>Real-time Communication</h2>
                <p className=' text-[#606060] text-[17px] font-[500]'>Implementing a responsive and efficient chat system for users and barbers/shops demandedcareful optimization to ensure smooth communication.</p>
            </div>
        </div>

        <div className=' flex gap-4'>
            <h1 className=' text-[#EF6A1F] text-[20px] font-medium'>5</h1>
            <div>
                <h2 className=' text-[#EF6A1F] text-[20px] font-medium'>Scheduling and Booking Logic</h2>
                <p className=' text-[#606060] text-[17px] font-[500]'>Developing an intuitive booking system and ensuring that barbers/shops could accept or reject bookings within the app was a complex task.</p>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Challenges