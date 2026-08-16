import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const favicon = document.querySelector('link[rel="icon"]');

if (favicon) {
  favicon.href = `${import.meta.env.BASE_URL}haroon-profile.jpeg`;
} else {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/jpeg';
  link.href = `${import.meta.env.BASE_URL}haroon-profile.jpeg`;
  document.head.appendChild(link);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
