import React from 'react'
import img1 from '../../assets/img3.png'
import img2 from '../../assets/img1.png'
import img3 from '../../assets/img2.png'
const Deliver = () => {
  return (
    <div className=' bg-[#11141B] md:h-[900px] md:pb-0 pb-12 w-full'>
          <div className=' w-[90%] mx-auto md:pt-32 pt-12 flex flex-col gap-4'>
          <h2 className=' py-2 px-5 bg-[#4FAD2E1A] text-[#4FAD2E] text-[16px] font-[600] w-fit'>Blog</h2>
           <div className=' flex flex-col md:flex-row md:items-center justify-between'>
           <h1 className=' md:text-[54px] text-[40px] font-[700] text-white'><span className=' font-[400]'>How we</span> <span className=' bg-gradient-to-l from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent'>Deliver</span></h1>
           <button className='bg-gradient-to-l from-red-500 via-orange-500 to-pink-500 py-2 px-5 rounded-md w-[100px] text-white text-[14px] font-[600] md:mt-0 mt-5'>View all</button>
           </div>
            <div className=' flex flex-col md:flex-row md:gap-y-0 gap-y-3  items-center justify-between mt-10'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            </div>
          </div>
    </div>
  )
}

export default Deliver