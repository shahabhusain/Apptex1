import React from 'react'

const Challenges = () => {
  return (
    <div className=' md:mx-24 mx-4 mt-20 '>
        <h1 className=' md:text-[42px] sm:text-[32px] text-[22px] font-[700] text-[#0D7592]'>Challenges We Face</h1>
        <p className=' text-[#606060] md:text-[17px] text-[13px] font-[500]'>Meeting the multifaceted challenges of app development, we grapple with intricacies in security, performance, and user experience, shaping resilient solutions for a seamless digital journey.</p>

        <div className=' flex flex-col gap-8 pt-8'>

        <div className=' flex gap-4'>
            <h1 className=' text-[#0D7592] text-[20px] font-medium'>1</h1>
            <div>
                <h2 className=' text-[#0D7592] text-[20px] font-medium'>Ensuring Quality Coaches</h2>
                <p className=' text-[#606060] text-[17px] font-[500]'>One of the primary challenges is to ensure that the platform attracts and approves only qualified and experienced coaches.</p>
            </div>
        </div>


        <div className=' flex gap-4'>
            <h1 className=' text-[#0D7592] text-[20px] font-medium'>2</h1>
            <div>
                <h2 className=' text-[#0D7592] text-[20px] font-medium'>Handling Geolocation Data</h2>
                <p className=' text-[#606060] text-[17px] font-[500]'>The application relies on geolocation data to enable the nearby coach finding feature. However, handling sensitive location information raises concerns about data privacy and security. </p>
            </div>
        </div>

        <div className=' flex gap-4'>
            <h1 className=' text-[#0D7592] text-[20px] font-medium'>3</h1>
            <div>
                <h2 className=' text-[#0D7592] text-[20px] font-medium'>Managing Schedules and Bookings </h2>
                <p className=' text-[#606060] text-[17px] font-[500]'>Coordinating schedules between parents, coaches, and students can become challenging, especially when dealing with daily or weekly sessions.</p>
            </div>
        </div>

        <div className=' flex gap-4'>
            <h1 className=' text-[#0D7592] text-[20px] font-medium'>4</h1>
            <div>
                <h2 className=' text-[#0D7592] text-[20px] font-medium'>Matching Coaches with Diverse Needs</h2>
                <p className=' text-[#606060] text-[17px] font-[500]'>Different children have varying educational requirements and learning styles. Ensuring that coaches can cater to a wide range of needs and subjects while matching them with suitable students can be a complex task.</p>
            </div>
        </div>

        <div className=' flex gap-4'>
            <h1 className=' text-[#0D7592] text-[20px] font-medium'>5</h1>
            <div>
                <h2 className=' text-[#0D7592] text-[20px] font-medium'>Maintaining User Engagement</h2>
                <p className=' text-[#606060] text-[17px] font-[500]'>To sustain the application’s success, it is essential to keep both coaches and parents engaged regularly. This can be challenging, as users may have different levels of commitment or time constraints, affecting the frequency of usage.</p>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Challenges