import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Importar librerías CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tiny-slider/dist/tiny-slider.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'flatpickr/dist/flatpickr.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);