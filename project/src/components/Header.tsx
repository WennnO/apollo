import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const links = [
    { name: 'APOLLO', path: '/' },
    { name: 'Event', path: '/event' },
    { name: 'Past\u00A0Experience', path: '/experience' },
    { name: 'About\u00A0Us', path: '/about' },
    { name: 'Service', path: '/service' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menuButton = document.querySelector('[data-menu-button]');
      const menu = document.querySelector('[data-menu]');

      if (
        isMenuOpen && 
        menuButton && 
        menu && 
        !(menuButton as HTMLElement).contains(event.target as Node) &&
        !(menu as HTMLElement).contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // 防止背景滚动
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-purple-500/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5">
        <div className="relative flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center z-10 transition-transform hover:scale-105">
            <img 
              src={logo} 
              alt="Apollo Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto max-w-[200px] sm:max-w-[240px] md:max-w-[288px] object-contain" 
            />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden relative z-10 p-2 text-white hover:text-purple-400 transition-all duration-300 rounded-lg hover:bg-purple-500/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-menu-button
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6 transition-transform duration-300" 
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
          <ul className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            {links.map((link, index) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`
                    relative px-3 xl:px-4 py-2 text-sm xl:text-base font-medium
                    text-white/90 hover:text-white transition-all duration-300
                    group
                    ${location.pathname === link.path 
                      ? 'text-white' 
                      : ''
                    }
                  `}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Active indicator with gradient */}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-full shadow-lg shadow-purple-500/50" />
                  )}
                  {/* Hover effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Glow effect on active */}
                  {location.pathname === link.path && (
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-lg blur-sm" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu with smooth animation */}
          <div 
            data-menu 
            className={`
              lg:hidden fixed inset-0 top-[73px] sm:top-[81px] bg-gradient-to-b from-black via-black/95 to-black
              backdrop-blur-xl border-t border-purple-500/20
              transform transition-all duration-300 ease-in-out
              ${isMenuOpen 
                ? 'translate-x-0 opacity-100 animate-slide-in' 
                : 'translate-x-full opacity-0 pointer-events-none'
              }
            `}
          >
            <ul className="flex flex-col h-full overflow-y-auto pt-8 pb-20">
              {links.map((link, index) => (
                <li key={link.path} className="w-full">
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      relative block py-4 px-6 text-center text-lg font-medium
                      transition-all duration-300
                      ${location.pathname === link.path 
                        ? 'text-white bg-gradient-to-r from-purple-500/20 to-purple-600/20 border-l-4 border-purple-500' 
                        : 'text-white/80 hover:text-white hover:bg-purple-500/10'
                      }
                      ${isMenuOpen ? 'animate-fade-in-up' : ''}
                    `}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {location.pathname === link.path && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 rounded-r-full shadow-lg shadow-purple-500/50" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
