import React from 'react';
import { useState } from 'react';
import MetaTags from '../MetaTags';

const FrequentAskedQuestion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

 const faqs = [
    {
      question: 'What makes AppTex a top-rated software house in Florida?',
      answer: 'AppTex stands out in Florida by offering a unique combination of innovative software development, scalable mobile apps, and result-driven digital marketing services that are tailored to meet the needs of businesses looking for high-performance solutions.'
    },
    {
      question: 'How can a scalable mobile app boost business growth in New York?',
      answer: 'Our experts design and develop scalable mobile applications for businesses in New York. We ensure your business gets the required engagement, retains audience, and generates more revenue through in-app features and seamless e-commerce integrations.'
    },
    {
      question: 'How can next-gen software solutions help businesses in Alabama improve efficiency?',
      answer: 'Next-gen software solutions enable businesses in Alabama to automate processes, streamline operations, and leverage data-driven insights for better decision-making, resulting in increased operational efficiency and productivity.'
    },
    {
      question: 'How can businesses in New York benefit from scalable website development?',
      answer: 'Scalable website development allows businesses in New York to grow without limits. As your customer base expands, your website can adapt to handle more traffic, content, and transactions, ensuring smooth user experiences at every stage.'
    },
    {
      question: 'How can AppTex help businesses in Florida with mobile app development?',
      answer: 'AppTex provides Florida businesses with custom, scalable mobile apps designed to meet local market needs. Our solutions enhance user engagement and offer seamless functionality across all devices, ensuring success in Florida’s mobile-first environment.'
    },
    {
      question: 'What makes AppTex the best choice for UI/UX design in Florida?',
      answer: 'AppTex offers Florida businesses intuitive and user-friendly UI/UX designs that drive conversions. Our Florida-focused designs are tailored to enhance customer satisfaction and meet local user expectations.'
    },
  ];

  return (
    <div className="md:w-[80%] w-[95%] mx-auto px-4 py-8">
      <h2 className="md:text-[40px] text-[30px] font-bold text-center mb-8 text-white">Frequently Asked Questions</h2>
      <MetaTags title="What makes AppTex the best choice for UI/UX design in Florida?" description="AppTex offers Florida businesses intuitive and user-friendly UI/UX designs that drive conversions. Our Florida-focused designs are tailored to enhance customer satisfaction and meet local user expectations." />
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-500 rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              className={`w-full px-6 py-4 text-left font-medium text-lg flex justify-between items-center ${activeIndex === index ? 'bg-[#ffffff2e]' : 'bg-[#ffffff2e]'}`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-white">{faq.question}</span>
              <span className="text-white">
                {activeIndex === index ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </span>
            </button>
            
            <div
              className={`px-6 pb-4 pt-0 transition-all duration-300 ${activeIndex === index ? 'block' : 'hidden'}`}
            >
              <p className="text-white mt-5">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentAskedQuestion;