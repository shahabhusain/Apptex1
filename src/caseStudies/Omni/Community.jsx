import React from 'react'
import side from '../Omni/Assets/Frame 1000009902.png'
const Community = () => {
  return (
    <div className=' md:mx-24 mx-4 md:flex md:flex-row flex-row-reverse justify-between items-center gap-7 mt-32'>
        <div className=''>
            <h1 className=' text-[#272727] md:text-[40px] sm:text-[30px] text-[20px] font-bold pt-7 md:pt-0'>Community</h1>
            <p className=' text-[#606060] md:text-[22px] text-[12px] font-normal pt-4 '>To create a vibrant and interactive community within our app, we introduced a user-generated content feature, allowing users to post, share, and engage with each other.</p>
        </div>
        <img className=' ' src={side} alt="" />
    </div>
  )
}

export default Community