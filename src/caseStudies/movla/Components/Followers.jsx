import React from 'react'
import side from '../Assets/Group 343.png'
const Followers = () => {
  return (
    <div className=' md:flex block gap-12 justify-between items-center md:mx-24 mx-4'>
       

        <div>
            <img className=' pt-7 md:pt-0' src={side} alt="" />
        </div>

        <div className=' md:w-[50%]'>
            <h1 className=' md:text-[41px] text-[27px] font-bold text-[#000]'>Creating <span className=' text-[#EDBD57]'>Friends</span> and <span className=' text-[#EDBD57]'>Community</span> Engagement:</h1>
            <p className=' md:text-[22px] text-[10px] font-normal text-[#606060]'>Users can create and upload short videos using the mobile application. These videos can be on various topics, such as dance, music, comedy, cooking, challenges, tutorials, and more.</p>
        </div>
    </div>
  )
}

export default Followers