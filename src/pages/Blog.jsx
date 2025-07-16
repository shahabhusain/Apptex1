import React from 'react'
import Deliver from '../components/blog/Deliver'
import Title from '../components/blog/Title'
import Build from '../components/home/Build'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const Blog = () => {
  return (
    <div>
        <Header />
         <Title />
        {/* <Deliver /> */}
        <Build />
        <Footer />
    </div>
  )
}

export default Blog