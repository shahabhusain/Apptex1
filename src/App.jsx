import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import Beams from '../Reactbits/Beams/Beams';
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App