import React from 'react'
import Hero from '../caseStudies/WinnerWin/Hero'
import Technology from '../caseStudies/WinnerWin/Technology'
import Project from '../caseStudies/WinnerWin/Project'
import Feature from '../caseStudies/WinnerWin/Feature'
import Challenge from '../caseStudies/WinnerWin/Challenge'
import Solution from '../caseStudies/WinnerWin/Solution'
import Footer from '../caseStudies/WinnerWin/Footer'
import Booking from '../caseStudies/WinnerWin/Booking'
import Customized from '../caseStudies/WinnerWin/Customized'

const WinnerPage = () => {
  return (
    <div>
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

export default WinnerPage