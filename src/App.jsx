import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from '../src/pages /Home';
import h_mapas from './pages/h_mapas/h_mapas';
import h_productos from './pages/h_productos/h_productos'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/h_productos" element={<h_productos />} />
          <Route path="/h_mapas" element={<h_mapas />} />
          {/* Aquí puedes agregar más rutas cuando las necesites */}
          {/* Ejemplo: <Route path="/mapas" element={<h_mapas />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;