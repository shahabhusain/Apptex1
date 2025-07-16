import React, { useEffect, useRef } from 'react';
import Portfolios from '../components/portfolio/Portfolios';
import Title from '../components/portfolio/Title';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Particles from '../../Reactbits/Particles/Particles';

const Portfolio = () => {

  return (
    <div className=' relative'>
      <div style={{ width: '100%', height: '5000px',}}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={600}
    particleSpread={5}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>

         <div className=' absolute top-0'>
           <Header />
        <Title />
        <Portfolios />
        <Footer />
         </div>
    </div>
  );
};

export default Portfolio;
