import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './logo.png';

const Header = () => {
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
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <Link to="/" className="absolute left-4 flex items-center">
            <img 
              src={logo} 
              alt="Apollo Logo" 
              className="h-24 w-24 object-contain" 
            />
          </Link>
          <ul className="flex justify-center space-x-8">
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
        </div>
      </nav>
    </header>
  );
}

export default Header;