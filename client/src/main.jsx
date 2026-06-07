import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import '@/styles/globals.css';
import App from '@/App';

// Keep Render backend alive — ping every 13 minutes
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const keepAlive = () => {
  fetch(`${API_URL}/health`)
    .then(() => console.log('🟢 Backend alive'))
    .catch(() => console.log('🔴 Backend waking up...'));
};

// Ping immediately on page load
keepAlive();

// Then ping every 13 minutes (Render sleeps at 15 min)
setInterval(keepAlive, 13 * 60 * 1000);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);