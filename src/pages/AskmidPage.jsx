import React from 'react'
import Hero from '../caseStudies/Asmid/Hero'
import Technology from '../caseStudies/Asmid/Technology'
import Project from '../caseStudies/Asmid/Project'
import Feature from '../caseStudies/Asmid/Feature'
import Booking from '../caseStudies/Asmid/Booking'
import Customized from '../caseStudies/Asmid/Customized'
import Challenge from '../caseStudies/Asmid/Challenge'
import Solution from '../caseStudies/Asmid/Solution'
import Footer from '../caseStudies/Asmid/Footer'
import Health from '../caseStudies/Asmid/Health'

const AskmidPage = () => {
  return (
    <div className=' bg-white'>
        <Hero />
        <Technology />
        <Project />
        <Feature />
        <Booking />
        <Customized />
        <Health />
        <Challenge />
        <Solution />
        <Footer />
    </div>
  )
}

export default AskmidPage