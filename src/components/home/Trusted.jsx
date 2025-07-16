import React, { useState, useEffect } from 'react';
import tes from '../../assets/tes.png'
const Trusted = () => {
  const testimonials = [
    {
      company: "Clutch.co",
      rating: 5,
      text: "They're there when we need them, and they perform the work that we need. Technoally reliability is their most important trait.We have regular meetings for planning and maintenance.",
      avatar: tes
    },
    {
      company: "Clutch.co",
      rating: 3,
      text: "They're there when we need them, and they perform the work that we need. Technoally reliability is probably their most important trait.We have regular meetings for planning and maintenance.",
      avatar: tes
    },
    {
      company: "Clutch.co",
      rating: 4,
      text: "They're there when we need them, and they perform the work that we need. Technoally reliability is probably their most important trait.We have regular meetings for planning and maintenance.",
      avatar: tes
    },
    {
      company: "TechReview",
      rating: 1,
      text: "Their technical expertise and responsiveness set them apart. We've seen significant improvements in our system performance since working with them.",
      avatar: tes
    },
    {
      company: "DigitalPartners",
      rating: 4,
      text: "The team delivers consistently high-quality results. Their ability to understand our business needs and translate them into technical solutions is impressive.",
      avatar: tes
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Number of items to show at once depending on screen size
  const getItemsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1;
      return 3;
    }
    return 3; 
  };
  
  const [itemsToShow, setItemsToShow] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsToShow());
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);
  
  // Handle next slide
  const nextSlide = () => {
    const maxIndex = testimonials.length - itemsToShow;
    setCurrentIndex(currentIndex === maxIndex ? 0 : currentIndex + 1);
  };
  
  // Handle previous slide
  const prevSlide = () => {
    const maxIndex = testimonials.length - itemsToShow;
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
  };
  
  // Show visible testimonials
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        {/* Header */}
        <div className="text-center flex flex-col items-center justify-center mb-16">
          <p className="text-green-500 font-[600] text-[16px] mb-2 bg-[#4FAD2E1A] p-2">Innovation & Trust</p>
          <h2 className="text-3xl md:text-[54px] font-[400] mb-2">
            TRUSTED BY EXPERTS, LOVED BY
          </h2>
          <h2 className="text-3xl md:text-[54px] font-bold ">
            CLIENTS WORLDWIDE
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Every company's journey is unique. Whether you need a quick fix or a dedicated technology partner, we've got you covered!
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-full md:w-1/3 px-3"
                  style={{ transition: 'all 0.5s ease' }}
                >
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-full">
                    {/* Company & Rating */}
                    <div className="mb-4 flex gap-4">
                    <img 
                          src={testimonial.avatar} 
                          alt="Client" 
                          className="w-12 h-12 rounded-full"
                        />
                    <div>
                    <h1 className="font-bold text-gray-800">{testimonial.company}</h1>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 text-yellow-400" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    </div>

                    {/* Avatar & Testimonial Text */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                    
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -ml-4 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -mr-4 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: testimonials.length - itemsToShow + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${currentIndex === index ? 'w-6 bg-green-500' : 'w-2 bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
     
      </div>
    </div>
  );
};

export default Trusted;