import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize';
import './reset.css';
import './index.css';
import App from './components/App/App.js';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <App />
    </>
  </StrictMode>
);
