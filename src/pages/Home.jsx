import React from 'react';
import Hero from '../components/home/Hero';
import WhatWeDo from '../components/home/WhatWeDo';
import Services from '../components/home/Services';
import RealWorld from '../components/home/RealWorld';
import Team from '../components/home/Team';
import Build from '../components/home/Build';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Trust from '../components/home/Trust';
import Technology from '../components/home/Technology';
const Home = () => {


  return (
    <div className="">
       <div className=' relative'>
           <div className=' absolute top-0'>
         <Header />
      </div>

      <main>
        <section className=' absolute top-32 left-0 right-0' >
          <Hero />
           <WhatWeDo />
           <Technology />
           <Services />
            <RealWorld />
            <Team />
             <Trust />
             <Build />
               <Footer />         
        </section>
      </main>
       </div>
    </div>
  );
};

export default Home;
