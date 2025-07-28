import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import Beams from '../Reactbits/Beams/Beams'
import SplashCursor from '../Reactbits/SplashCursor/SplashCursor'
import whats from './assets/whats.png'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <div>
      {/* <SplashCursor /> */}

      <motion.div
        initial={{ top: 12 }}
        animate={{ top: 'calc(100% - 7rem)' }} // 3rem = bottom-12
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className='fixed left-12 w-[70px] z-[1000] cursor-pointer'
        style={{ position: 'fixed' }}
      >
         <a href="https://wa.me/923161964761" target='_blank'>
         
           <img src={whats} alt="WhatsApp Icon" />
         </a>
      </motion.div>

      <button className=' text-white text-[20px] font-medium border-[1px] py-2 px-5 z-[2312323000] border-[#ffffff56] bg-[#000000] rounded-md fixed right-12 bottom-12'>Get a code</button>

      <RouterProvider router={router} />
    </div>
  )
}

export default App
