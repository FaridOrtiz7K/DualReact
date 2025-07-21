import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from '../src/pages /Home';
import h_mapas from './pages/h_mapas/h_mapas';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  // Mueve la declaración de sectionsData fuera del JSX para que se ejecute en el main 
  const sectionsData = [
    {
      title: "Hidalgo en mapas",
      description: "Mapas interactivos de interés ciudadano, gastronomía, recreación, cultura, entre otros temas",
      imageUrl: "./images/sec/1.png",
      linkUrl: "./pags/h_mapas.php"
    },
    {
      title: "Hidalgo en números",
      description: "Información relevante y sintetizada en tableros dinámicos e infografías por municipio",
      imageUrl: "./images/sec/2.png",
      linkUrl: "./pags/h_numeros.php"
    },
    {
       title: "Monitoreo de indicadores nacionales",
      description: "Tableros donde se muestra la posición de Hidalgo con respecto a indicadores nacionales",
      imageUrl: "./images/sec/3.png",
      linkUrl: "./pags/h_numeros.php"
    },
    {
      title: "Atlas interactivo del estado de Hidalgo",
      description: "Más de 100 capas de información geográfica relevante categorizada por sectores",
      imageUrl: "./images/atlas.png",
      linkUrl: "./pags/h_numeros.php"
    },
    {
      title: "Productos y servicios",
      description: "Cartografía temática, análisis de datos, geoestadística, entre otros servicios que ofrece el SIGEH",
      imageUrl: "./images/sec/5.png",
      linkUrl: "./pags/h_numeros.php"
    },
    {
      title: "Marco Normativo",
      description: "Normas y bases legales vigentes y actualizadas del uso y manejo de información estadística y geográfica",
      imageUrl: "./images/sec/6.jpg",
      linkUrl: "./pags/h_numeros.php"
    },

    // ... puedes agregar más secciones aquí
  ];
  // Mueve la declaración de customBanners fuera del JSX para que se ejecute en el main 
  const customBanners = [
    {
      pdfLink: "pdf/carta_geo_23.pdf",
      imageSrc: "images/banner_carta.png",
      altText: "Carta geográfica"
    },
    {
      pdfLink: "pdf/Lineamientos_PED.pdf",
      imageSrc: "images/banner_lineamientos.png",
      altText: "Lineamientos PED"
    }
  ];
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Aquí puedes agregar más rutas cuando las necesites */}
          {/* Ejemplo: <Route path="/mapas" element={<h_mapas />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;