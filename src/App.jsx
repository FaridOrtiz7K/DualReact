import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from '../src/pages/home';
import Mapas from './pages/h_mapas/h_mapas';
import Productos from '../src/pages/h_productos/h_productos';
import Normativas from '../src/pages/h_normatividad/h_normatividad';
import Numeros from '../src/pages/h_numeros/h_numeros'
import Consulta from '../src/pages/conuslta_mun/consulta_mun'
//import Complejidad from '../src/pages/complejidadEconomica/complejidad'
import InfoMun from '../src/pages/h_numeros/info_mun'
import InfoMet from '../src/pages/h_numeros/info_met'
import Mantenimineto from '../src/pages/MaintenancePage';
import Alimentario from '../src/pages/alimentario/alimentario'


//import Alimentario from '../src/pages/priodidadAlimentaria/alimentario'
import Info_reg from '../src/pages/h_numeros/InfografiasRegionales'

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
          <Route path="/h_numeros" element={<Numeros />} />
          <Route path="/consulta_mun" element={<Consulta />} />
          <Route path="/h_normatividad" element={<Normativas />} />
          <Route path="/info_mun" element={<InfoMun />} />
          <Route path="/info_met" element={<InfoMet />} />
          <Route path='/info_reg' element={<Info_reg/>}/>
          <Route path='/mantenimiento' element={<Mantenimineto/>}/>
          <Route path='/alimentario' element={<Alimentario/>}/>

         { /*<Route path="/alimentario" element={<Alimentario />} />
          <Route path="/rellenos" element={<Rellenos />} />*/}

          {/* Aquí puedes agregar más rutas cuando las necesites */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;