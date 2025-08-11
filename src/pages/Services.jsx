import React from 'react'
import Product from '../components/services/Product'
import Title from '../components/services/Title'
import Build from '../components/home/Build'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Beams from '../../Reactbits/Beams/Beams'
const Services = () => {
  return (
    <div>
<div className=' fixed top-0' style={{ width: '100%', height: '800px', }}>
  <Beams
    beamWidth={2}
    beamHeight={15}
    beamNumber={12}
    lightColor="#ffffff"
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={0}
  />
</div>
            <div className=' absolute top-0'>
      <Header />
         <Title />
        <Product />
        <Build />
        <Footer />
        </div> 
    </div>
  )
}

export default Services