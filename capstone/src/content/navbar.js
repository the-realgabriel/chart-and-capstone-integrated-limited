import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-white p-1 md:px-12 border-b-[1px] border-gray-200 w-full shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-2">
          <Link to="/">
          <div className="logo text-lg font-bold text-gray-800">CCL</div></Link>
          
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-1 rounded-lg"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
          </button>

          <div 
            className={`
              fixed md:relative top-[56px] md:top-0 left-0 
              w-full md:w-auto h-screen md:h-auto
              bg-white md:bg-transparent
              transform transition-transform duration-300 ease-in-out
              ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
              shadow-lg md:shadow-none
            `}
          >
            <ul className="
              flex flex-col md:flex-row 
              justify-start md:justify-between 
              gap-3 p-4 md:p-0
              text-lg font-medium
            ">
              <li>
                <a 
                  href="/about" 
                  className="block py-1 px-3 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="/govern" 
                  className="block py-1 px-3 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Corporate Governance
                </a>
              </li>
              <li>
                <a 
                  href="/mining" 
                  className="block py-1 px-3 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Mining Assets
                </a>
              </li>
              <li>
                <a 
                  href="/projects" 
                  className="block py-1 px-3 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Project Data
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
