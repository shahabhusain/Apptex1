import React, { useEffect, useRef } from 'react'
import Product from '../components/services/Product'
import Title from '../components/services/Title'
import Trusted from '../components/home/Trusted'
import Deliver from '../components/home/Deliver'
import Build from '../components/home/Build'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Particles from '../../Reactbits/Particles/Particles'

const Services = () => {
  return (
    <div className=' relative'>
            <div style={{ width: '100%', height: '1900px'}}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={400}
    particleSpread={5}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
            <div className=' absolute top-0'>
      <Header />
         <Title />
        <Product />
        {/* <Trusted />
        <Deliver /> */}
        <Build />
        <Footer />
        </div> 
    </div>
  )
}

export default Services