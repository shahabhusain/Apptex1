import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isActive, setIsActive] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 1, name: "HOME", path: "/" },
    { id: 2, name: "OUR STORY", path: "/about" },
    { id: 3, name: "OUR EXPERTIES", path: "/services" },
    { id: 4, name: "OUR INSIGHTS", path: "/portfolio" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-[1000] shadow-md transition-colors duration-300 ${
        scrolled ? 'bg-[#000000]' : 'bg-transparent'
      }`}
    >
      <div className="flex w-[90%] mx-auto items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[120px]" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setIsActive(item.id)}
              className="relative text-[14px] cursor-pointer transition duration-300 text-white"
            >
              {item.name}
            </Link>
          ))}
        </ul>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden md:block px-6 py-2 rounded-full font-semibold text-[#fff] transition hover:opacity-90 border-2 border-transparent bg-transparent"
          style={{
            borderImage: "linear-gradient(to right, blue, red) 1",
            borderImageSlice: 1,
            borderRadius: 12
          }}
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => { setIsActive(item.id); setIsOpen(false); }}
                className="text-[16px] font-[500] text-gray-800 hover:text-red-500 transition"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-red-500"
            >
              Contact Us
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
