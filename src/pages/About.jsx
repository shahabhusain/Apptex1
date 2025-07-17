import React from 'react'
import Crafting from '../components/about/Crafting'
import OurStory from '../components/about/OurStory'
import OurMission from '../components/about/OurMission'
import Value from '../components/about/Value'
import Team from '../components/home/Team'
import Build from '../components/home/Build'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Beams from '../../Reactbits/Beams/Beams'
const About = () => {
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
        <Crafting />
        <OurStory />
        <OurMission />
        <Value />
        <Team />
        <Build />
        <Footer />
        </div>
    </div>
  )
}

export default About