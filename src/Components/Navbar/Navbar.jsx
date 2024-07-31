import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function homePage() {
    window.location.href = 'Home';
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="bg-[#2C3E50] py-4 md:py-10 uppercase">
        <div className="container mx-auto flex justify-between items-center font-bold px-4">
          <p className="text-white text-3xl md:text-5xl cursor-pointer" onClick={homePage}>
            Start Framework
          </p>
          <button
            className="md:hidden text-white text-2xl"
            onClick={toggleMenu}
          >
            <i className="fas fa-bars"></i>
          </button>
          <ul className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-8 my-auto ${isOpen ? 'flex' : 'hidden'} md:flex`}>
            <li><NavLink className="text-white" to="about">About</NavLink></li>
            <li><NavLink className="text-white" to="port">Portfolio</NavLink></li>
            <li><NavLink className="text-white" to="contact">Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
