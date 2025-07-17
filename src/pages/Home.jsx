import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Hero from '../components/home/Hero';
import WhatWeDo from '../components/home/WhatWeDo';
import Services from '../components/home/Services';
import Client from '../components/home/Client';
import RelationShip from '../components/home/RelationShip';
import RealWorld from '../components/home/RealWorld';
import Team from '../components/home/Team';
import Trusted from '../components/home/Trusted';
import Deliver from '../components/home/Deliver';
import Build from '../components/home/Build';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ShapeBlur from '../../Reactbits/ShapeBlur/ShapeBlur';
import Beams from '../../Reactbits/Beams/Beams';
import logo from '../assets/logo.png'
const Home = () => {


  return (
    <div className="">

<div style={{ 
  position: 'relative', 
  height: '800px', 
  overflow: 'hidden',
  width: '100%' // Ensure full width
}}>
  {/* Background Image */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(your-image-url.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 0
  }} />
  
  {/* ShapeBlur Component */}
  <ShapeBlur
    variation={0}
    pixelRatioProp={window.devicePixelRatio || 1}
    shapeSize={0.5}
    roundness={0.5}
    borderSize={0.05}
    circleSize={0.5}
    circleEdge={1}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1
    }}
  />
  
  {/* Optional Content Overlay */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    color: 'white',
    textAlign: 'center',
    padding: '2rem'
  }}>
     <img src={logo} alt="" />
  </div>
</div>
      <div className=' absolute top-0'>
         <Header />
      </div>

<div className=' fixed top-0 z-[-1]' style={{ width: '100%', height: '800px', }}>
  <Beams
    beamWidth={2}
    beamHeight={15}
    beamNumber={12}
    lightColor="#ffffff"
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={0}
  />
</div>

      <main>
        <section className='' >
         
          <Hero />
          <WhatWeDo />
          <Services />
          {/* <RelationShip /> */}
          <RealWorld />
          <Team />
          {/* <Trusted />
          <Deliver /> */}
          <Build />
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Home;
