import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from '../src/pages/home';
<<<<<<< HEAD
import Mapas from '../src/pages/h_mapas/h_mapas';
=======
import Mapas from './pages/h_mapas/h_mapas';
>>>>>>> 8da686e07112fd506dfde871afe561c361d05301
import Productos from '../src/pages/h_productos/h_productos'
import Numeros from '../src/pages/h_numeros/h_numeros'
import Consulta from '../src/pages/conuslta_mun/consulta_mun'
import  Normatividad from '../src/pages/h_normatividad/h_normatividad'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/h_productos" element={<Productos />} />
          <Route path="/h_mapas" element={<Mapas />} />
<<<<<<< HEAD
          <Route path="/h_numeros" element={<Numeros />} />
          <Route path="/consulta_mun" element={<Consulta />} />
          <Route path="/h_normatividad" element={<Normatividad />} />
=======
>>>>>>> 8da686e07112fd506dfde871afe561c361d05301
          {/* Aquí puedes agregar más rutas cuando las necesites */}
          {/* Ejemplo: <Route path="/mapas" element={<h_mapas />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;