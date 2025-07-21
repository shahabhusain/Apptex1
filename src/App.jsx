import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import Beams from '../Reactbits/Beams/Beams';
import SplashCursor from '../Reactbits/SplashCursor/SplashCursor';
const App = () => {
  return (
    <div> 
      <SplashCursor />
      
      <RouterProvider router={router} />
    </div>
  )
}

export default App