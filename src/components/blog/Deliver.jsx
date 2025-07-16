import React from 'react'
import bg from '../../assets/bgg.png'
import img1 from '../../assets/img3.png'
import img2 from '../../assets/img4.png'
import img3 from '../../assets/img5.png'
import img4 from '../../assets/img6.png'
import img5 from '../../assets/img7.png'
import img6 from '../../assets/img8.png'
const Deliver = () => {
  return (
    <div className=' flex flex-col items-center justify-center my-24 w-[95%] mx-auto'>
        <div>
        <img className=' md:w-[1250px] ' src={bg} alt="" />
        </div>

        <div className=' grid md:grid-cols-3 grid-cols-2 gap-4 mt-20'>
          <img className=' rounded-lg' src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
    </div>
  )
}

export default Deliver