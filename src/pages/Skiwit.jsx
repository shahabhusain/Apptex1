import React from 'react'
import Hero from '../caseStudies/Skiwit/Hero'
import Technology from '../caseStudies/Skiwit/Technology'
import Project from '../caseStudies/Skiwit/Project'
import Feature from '../caseStudies/Skiwit/Feature'
import Challenge from '../caseStudies/Skiwit/Challenge'
import Solution from '../caseStudies/Skiwit/Solution'
import Footer from '../caseStudies/Skiwit/Footer'
import Booking from '../caseStudies/Skiwit/Booking'
import Customized from '../caseStudies/Skiwit/Customized'

const Skiwit = () => {
  return (
    <div className=' bg-white'>
        <Hero />
        <Technology />
        <Project />
        <Feature />
        <Booking />
        <Customized />
        <Challenge />
        <Solution />
        <Footer />
    </div>
  )
}

export default Skiwit