import React from 'react'
import Hero from '../caseStudies/movla/Components/Home'
import Technology from '../caseStudies/movla/Components/Technology'
import Project from '../caseStudies/movla/Components/Project'
import Feature from '../caseStudies/movla/Components/Features'
import Challenges from '../caseStudies/movla/Components/Challenge'
import Solution from '../caseStudies/movla/Components/Solution'
import Footer from '../caseStudies/movla/Components/Footer'
import Followers from '../caseStudies/movla/Components/Followers'
import Short from '../caseStudies/movla/Components/Short'

const MovlaPage = () => {
  return (
    <div className=' bg-white'>
        <Hero />
        <Technology />
        <Project />
        <Feature />
        <Followers />
        <Short />
        <Challenges />
        <Solution />
        <Footer />

    </div>
  )
}

export default MovlaPage