import React from 'react'
import Hero from '../caseStudies/LocalCaregiver/Home'
import Technology from '../caseStudies/LocalCaregiver/Technology'
import Project from '../caseStudies/LocalCaregiver/Project'
import Feature from '../caseStudies/LocalCaregiver/Features'
import Short from '../caseStudies/LocalCaregiver/Short'

import Flexible from '../caseStudies/LocalCaregiver/Flexible'
import Challenges from '../caseStudies/LocalCaregiver/Challenges'
import Solution from '../caseStudies/LocalCaregiver/Solution'
import Footer from '../caseStudies/LocalCaregiver/Footer'
import Followers from '../caseStudies/LocalCaregiver/Followers'


const LocalPage = () => {
  return (
    <div>
        <Hero />
        <Technology />
        <Project />
        <Feature />
        <Followers />
        <Short />
        <Flexible />
        <Challenges />
        <Solution />
        <Footer />
    </div>
  )
}

export default LocalPage