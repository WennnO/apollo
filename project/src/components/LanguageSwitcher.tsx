import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang); // Store language preference
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-md text-white hover:bg-white/10 transition"
    >
      {i18n.language === 'en' ? '中文' : 'English'}
    </button>
  );
};

export default LanguageSwitcher;
