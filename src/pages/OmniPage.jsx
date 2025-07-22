import React from 'react'
import Hero from '../caseStudies/Omni/Hero'
import Project from '../caseStudies/Omni/Project'
import Feature from '../caseStudies/Omni/Feature'
import Community from '../caseStudies/Omni/Community'
import Chat from '../caseStudies/Omni/Chat'
import Challenges from '../caseStudies/Omni/Challenges' 
import Solution from '../caseStudies/Omni/Solution'
import Footer from '../caseStudies/Omni/Footer'
import Technology from '../caseStudies/Omni/Technology'
import Booking from '../caseStudies/Omni/Booking'
const OmniPage = () => {
  return (
    <div className=' bg-white'>
        <Hero />
        <Technology />
        <Project />
        <Feature />
        <Booking />
        <Chat />
        <Community />
        <Challenges />
        <Solution />
        <Footer />
    </div>
  )
}

export default OmniPage