import React from 'react'

const RelationShip = () => {
  return (
    <div className=' w-[95%] mx-auto mt-32'>
        <h1 className=' md:text-[44px] text-[34px] font-[400] text-center'>Great <span className=' bg-gradient-to-l from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent font-[700]'>Relationships</span>. Spectacular <span className=' bg-gradient-to-l from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent font-[700]'>Results</span>.</h1>

         <div className=' flex items-center justify-around mt-12'>
         <div className=' w-[400px] h-[250px] bg-[#F8F8F8] flex flex-col items-center justify-center gap-y-3 text-center '>
            <h1 className=' md:text-[54px] text-[40px] md:font-[800] font-[600] text-black'>150+</h1>
            <p className=' md:text-[26px] text-[16px] font-[400] text-[#949494]'>Projects Delivered</p>
        </div>

        <div className=' w-[400px] h-[250px] bg-[#F8F8F8] flex flex-col items-center justify-center gap-y-3 text-center '>
            <h1 className=' md:text-[54px] text-[40px] md:font-[800] font-[600] text-black'>5+</h1>
            <p className=' md:text-[26px] text-[16px] font-[400] text-[#949494]'>Years Experience</p>
        </div>

        <div className=' w-[400px] h-[250px] bg-[#F8F8F8] flex-col flex items-center justify-center gap-y-3 text-center '>
            <h1 className=' md:text-[54px] text-[40px] md:font-[800] font-[600] text-black'>120+</h1>
            <p className=' md:text-[26px] text-[16px] font-[400] text-[#949494]'>Five Star Ratings</p>
        </div>
         </div>
    </div>
  )
}

export default RelationShip