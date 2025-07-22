import React from 'react'
import Hero from '../caseStudies/Cheapskate/Hero'
import Technology from '../caseStudies/Cheapskate/Technology'
import Project from '../caseStudies/Cheapskate/Project'
import Feature from '../caseStudies/Cheapskate/Feature'
import Challenge from '../caseStudies/Cheapskate/Challenge'
import Solution from '../caseStudies/Cheapskate/Solution'
import Footer from '../caseStudies/Cheapskate/Footer'
import Booking from '../caseStudies/Cheapskate/Booking'
import Customized from '../caseStudies/Cheapskate/Customized'

const CheapsKatePage = () => {
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

export default CheapsKatePage