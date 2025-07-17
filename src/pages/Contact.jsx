import React from 'react'
import Contacts from '../components/contact/Contacts'
import Title from '../components/contact/Title'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Beams from '../../Reactbits/Beams/Beams'

const Contact = () => {
  return (
    <div>
      <div className=' fixed top-0 z-[-1]' style={{ width: '100%', height: '800px', }}>
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
            <div className=' absolute top-0 w-full'>
        <Header />
         <Title />
        <Contacts />
        <Footer />
        </div>
    </div>
  )
}

export default Contact