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
const Home = () => {


  return (
    <div className="">
      
      <main>
        <section className='' >
          <Header />
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
