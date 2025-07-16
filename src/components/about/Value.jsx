import React from 'react'
import val from '../../assets/val.png'
const Value = () => {
  const ValueData = [
    {
      img:val,
      title:"Integrity & Transparency",
      description:"We believe in honest communication, ethical practices, and trust-driven relationships."
    },
    {
      img:val,
      title:"Customer-Centric Approach",
      description:"Our clients’ success is our success; we prioritize their needs and vision."
    },
    {
      img:val,
      title:"Simplicity & Efficiency",
      description:"We believe in clean, efficient solutions that solve complex problems with ease."
    },
    {
      img:val,
      title:"Collaboration & Teamwork",
      description:"Great solutions come from working together, valuing diverse skills and ideas."
    },
    {
      img:val,
      title:"Sustainability & Responsibility",
      description:"We develop with a mindful approach, considering the long-term impact of our work."
    },
    {
      img:val,
      title:"Growth & Adaptability",
      description:"We continuously evolve, learn, and adapt to stay ahead in the ever-changing tech world."
    },
  ]
  return (
    <div className=' flex flex-col items-center justify-center gap-y-4 w-[90%] mx-auto mt-32'>
     <h1 className=' py-1 px-4 bg-[#4FAD2E1A] text-[#4FAD2E] text-[16px] w-fit font-[600]'>What We Stand For</h1>
     <h1 className='  text-[32px] font-[800] text-center text-white'>APPTEX <span className='bg-gradient-to-l from-orange-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent font-[800]'>Core Values</span></h1>
     <div className=' grid md:grid-cols-3 grid-cols-1 mt-12'>
      {
        ValueData.map((item)=>(
          <div className=' border-[1px] border-[#e6e5e5] p-3 rounded-md'>
             <div className=' p-12 flex flex-col gap-2'>
               <img className=' w-[50px]' src={item.img} alt="" />
               <h1 className=' text-[24px] font-[700] text-[#ffffff]'>{item.title}</h1>
               <p className=' text-[#ffffff] text-[16px] font-[400]'>{item.description}</p>
             </div>
          </div>
        ))
      }
     </div>
    </div>
  )
}

export default Value