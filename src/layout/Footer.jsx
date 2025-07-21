import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const navLinks = [
  { name: "Home", path: "/" },
  { name: "Our Story", path: "/about" },
  { name: "Our Expertise", path: "/services" },
  { name: "Our Insights", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative">
      {/* Main Footer */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        </div>
        
        {/* Glowing Accent Line */}
        <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <img 
                  className="w-32 h-auto mb-6 filter drop-shadow-lg" 
                  src={logo} 
                  alt="Company Logo" 
                />
                <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                  Innovating the future with cutting-edge software solutions. 
                  Transforming ideas into digital excellence.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center gap-3 hover:text-white transition-colors">
                    <FaEnvelope className="text-blue-400" />
                    <span>Apptex@company.com</span>
                  </div>
                  <div className="flex items-center gap-3 hover:text-white transition-colors">
                    <FaPhone className="text-green-400" />
                    <span>+92 31619761</span>
                  </div>
                  <div className="flex items-center gap-3 hover:text-white transition-colors">
                    <FaMapMarkerAlt className="text-red-400" />
                    <span>Peshawar, Khyber Pakhtunkhwa, PK.</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white relative">
                Company
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
              </h3>
<ul>
  {navLinks.map((link) => (
    <li key={link.name}>
      <a 
        href={link.path}
        className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block"
      >
        {link.name}
      </a>
    </li>
  ))}
</ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white relative">
                Services
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"></span>
              </h3>
              <ul className="space-y-3">
                {['Web Development', 'Mobile Apps', 'Backend Development', 'UI/UX Designing'].map((item) => (
                  <li key={item}>
                    <button
                      className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Social Media & Newsletter */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              
              {/* Social Media */}
              <div className="flex flex-col items-center lg:items-start">
                <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
                <div className="flex gap-4">
                  <a 
                    href='https://www.linkedin.com/company/apptex/posts/?feedView=all'
          target='_blank'
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 group"
                  >
                    <FaLinkedin className="text-xl text-gray-400 group-hover:text-white" />
                  </a>

                </div>
              </div>
              
              {/* Newsletter */}
              <div className="flex flex-col items-center lg:items-end">
                <h4 className="text-lg font-semibold mb-4 text-white">Stay Updated</h4>
                <div className="flex gap-2 w-full max-w-sm">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-black text-gray-400 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
            <p>&copy; 2025 Apptex Software Solution. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          >
            <FaArrowUp className="text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </footer>
  )
}

export default Footer