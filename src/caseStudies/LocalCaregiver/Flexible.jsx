import React from 'react'
import main from '../LocalCaregiver/Assets/Frame 1000009908.png'
const Flexible = () => {
  return (
    <div className=' mx-auto flex flex-col items-center justify-center mt-20'>
        <h1 className=' text-[40px] font-[700] text-[#0D7592] text-center'>Flexible Schedule</h1>
        <p className=' text-[#606060] mt-2 text-[20px] font-normal text-center'>Customize Your Hours: Flexibility Designed Around You</p>
        <img className=' w-[855px] mt-6' src={main} alt="" />
    </div>
  )
}

export default Flexible