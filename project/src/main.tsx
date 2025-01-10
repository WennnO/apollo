// import React from 'react';
// import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n'; // Import before App
import App from './i18n/locales/en/App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/*
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/