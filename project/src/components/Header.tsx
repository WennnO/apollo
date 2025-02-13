import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const links = [
    { name: 'Apollo Gen-Z', path: '/' },
    { name: 'Past Experience', path: '/experience' },
    { name: 'About Us', path: '/about' },
    { name: 'Service', path: '/service' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 md:px-8 md:py-8">
        <div className="relative flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="absolute left-4 flex items-center py-4">
            <img 
              src={logo} 
              alt="Apollo Logo" 
              className="h-24 w-24 object-contain" 
            />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white absolute top-4 right-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 flex space-x-8 py-4">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-white hover:text-purple-400 transition-colors ${
                    location.pathname === link.path ? 'border-b-2 border-purple-500' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 left-0 bg-black/90 md:hidden">
              <ul className="flex flex-col items-center py-4">
                {links.map((link) => (
                  <li key={link.path} className="w-full">
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-2 px-4 text-center text-white hover:text-purple-400 transition-colors ${
                        location.pathname === link.path ? 'border-l-4 border-purple-500 bg-purple-500/20' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
