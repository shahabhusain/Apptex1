import React from 'react';
import Portfolios from '../components/portfolio/Portfolios';
import Title from '../components/portfolio/Title';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Beams from '../../Reactbits/Beams/Beams';

const Portfolio = () => {

  return (
    <div>
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
