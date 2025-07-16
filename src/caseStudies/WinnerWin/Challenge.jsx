import React from 'react'
const Challenge = () => {
  return (
    <div className=' md:mx-24 mx-4 mt-32'>
        <h1 className=' text-[#000] md:text-[40px] text-[22px] font-bold'>Challenges <span className=' text-black font-[500]'>We Face</span></h1>
        <p className=' text-[#606060] font-[500] md:text-[17px] text-[14px] pt-5'>The evolving terrain of app challenges demands our expertise in handling security, performance, and user experience intricacies, crafting adaptive solutions that redefine digital excellence.</p>

      <div className=' md:flex block justify-between'>
      <div className=' flex flex-col gap-5 pt-4 '>

<div className=' flex gap-4'>
    <h1 className=' text-[#000] text-[20px] font-medium'>1</h1>
    <div>
        <h2 className=' text-[#000] text-[20px] font-medium'>Real-time Synchronization and Performance Issues with Firebase</h2>
        <p className=' text-[#606060] text-[17px] font-[500]'>Firebase, while offering real-time data synchronization, can sometimes pose challenges in terms of performance, especially when dealing with a growing user base and extensive workout data.</p>
    </div>
</div>

<div className=' flex gap-4'>
    <h1 className=' text-[#000] text-[20px] font-medium'>2</h1>
    <div>
        <h2 className=' text-[#000] text-[20px] font-medium'>Complexity in Implementing Custom Cloud Functions</h2>
        <p className=' text-[#606060] text-[17px] font-[500]'>Developing custom Cloud Functions in Firebase to handle specific business logic or integrations might be complex, especially when dealing with asynchronous tasks or third-party API integrations.</p>
    </div>
</div>

<div className=' flex gap-4'>
    <h1 className=' text-[#000] text-[20px] font-medium'>3</h1>
    <div>
        <h2 className=' text-[#000] text-[20px] font-medium'>User Engagement and Retention</h2>
        <p className=' text-[#606060] text-[17px] font-[500]'>Keeping users engaged and retained in a fitness app can be challenging due to competition in the market and changing user preferences.</p>
    </div>
</div>



</div>
     

      </div>

      <div className=' flex gap-4 pt-4'>
    <h1 className=' text-[#000] text-[20px] font-medium'>4</h1>
    <div>
        <h2 className=' text-[#000] text-[20px] font-medium'>Cross-platform Consistency with Flutter</h2>
        <p className=' text-[#606060] text-[17px] font-[500]'>Ensuring a consistent user experience across various platforms (iOS and Android) can be challenging with Flutter, especially when dealing with platform-specific design guidelines and behaviors.</p>
    </div>
</div>



    </div>
  )
}

export default Challenge