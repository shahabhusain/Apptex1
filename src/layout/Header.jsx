import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png'
const Header = () => {
  const [isActive, setIsActive] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 1, name: "HOME", path: "/" },
    { id: 2, name: "OUR STORY", path: "/about" },
    { id: 3, name: "OUR EXPERTISE", path: "/services" },
    { id: 4, name: "OUR INSIGHTS", path: "/portfolio" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <div className={`fixed w-full z-50 transition-colors duration-300`}>
      <div className="flex w-[90%] mx-auto items-center justify-between py-4 px-6">
      <Link to="/"> <img className=' w-[200px]' src={logo} alt="" /></Link>
        {/* Desktop Menu Button - Always visible */}
        <button
          className="text-2xl text-white focus:outline-none transition-transform hover:scale-110"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

       
      </div>

      {/* Full-screen Desktop Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-gradient-to-br from-black via-blue-900 to-gray-900 flex flex-col items-center justify-center"
          >
            <motion.ul className="flex flex-col items-center gap-12">
              {navItems.map((item) => (
                <motion.li key={item.id} variants={itemVariants}>
                  <Link
                    to={item.path}
                    onClick={() => {
                      setIsActive(item.id);
                      setMenuOpen(false);
                    }}
                    className={`text-4xl font-medium transition-all duration-300 text-white hover:text-blue-300`}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants} className="mt-16">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="px-10 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-xl transition-all"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Close Button */}
            <motion.button
              variants={itemVariants}
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-8 text-white text-2xl"
              aria-label="Close menu"
            >
              <FiX size={32} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;