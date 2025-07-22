import React from 'react'
import Hero from '../caseStudies/DevelopmentCenter/Hero'
import Technology from '../caseStudies/DevelopmentCenter/Technology'
import Project from '../caseStudies/DevelopmentCenter/Project'
import Feature from '../caseStudies/DevelopmentCenter/Feature'
import Challenge from '../caseStudies/DevelopmentCenter/Challenge'
import Solution from '../caseStudies/DevelopmentCenter/Solution'
import Footer from '../caseStudies/DevelopmentCenter/Footer'
import Booking from '../caseStudies/DevelopmentCenter/Booking'
import Customized from '../caseStudies/DevelopmentCenter/Customized'

const DevelopmenCenterPage = () => {
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

export default DevelopmenCenterPage