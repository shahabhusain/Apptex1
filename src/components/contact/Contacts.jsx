import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaCog } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center md:my-20 my-10 ">
      <div className="bg-[#1717179b] p-8 rounded-xl md:w-[60%] w-[95%] border border-gray-800 shadow-lg">
        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaCog className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaYoutube className="w-5 h-5" />
          </a>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mb-6">
          <div className="w-6 h-1 rounded-full bg-purple-500 mx-1"></div>
          <div className="w-1 h-1 rounded-full bg-gray-600 mx-1"></div>
          <div className="w-1 h-1 rounded-full bg-gray-600 mx-1"></div>
        </div>
        
        {/* Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full bg-gray-800 text-white border-0 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Last name" 
                className="w-full bg-gray-800 text-white border-0 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>
          </div>
          
          <div>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-gray-800 text-white border-0 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>
          
          <div>
            <input 
              type="tel" 
              placeholder="Phone number" 
              className="w-full bg-gray-800 text-white border-0 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>
          
          <div>
            <textarea 
              placeholder="Let us know how we can assist you" 
              rows="3" 
              className="w-full bg-gray-800 text-white border-0 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-purple-500"
            ></textarea>
          </div>
          
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;