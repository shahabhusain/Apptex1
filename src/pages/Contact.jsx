import React, { useEffect, useRef } from 'react'
import Contacts from '../components/contact/Contacts'
import Title from '../components/contact/Title'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import LocomotiveScroll from 'locomotive-scroll'

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.08, // scroll speed
      multiplier: 1, // Increase for faster scrolling
      class: 'is-reveal',
    });

    // Cleanup on unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div>
            <main data-scroll-container ref={containerRef}>
            <section className='' data-scroll-section>
        <Header />
         <Title />
        <Contacts />
        <Footer />
        </section>
        </main>
    </div>
  )
}

export default Contact