/*import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
      </nav>
    </header>
  );
}

export default Header;
*/

import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed w-full z-30 top-0 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          {/* Your logo or brand name */}
        </div>
        <div className="flex items-center gap-6">
          <a href="#home">{t('navigation.home')}</a>
          <a href="#about">{t('navigation.about')}</a>
          <a href="#services">{t('navigation.services')}</a>
          <a href="#contact">{t('navigation.contact')}</a>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
