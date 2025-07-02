import React from 'react';
import Navbar from './components/Navbar';//importar NavBar
import Footer from './components/Footer';//importar SectionsGrid
import { SectionsGrid } from './components/SectionCard'; //importar SectionsGrid
import titleimage from './components/titleImage'

const App = () => {
  // Mueve la declaración de sectionsData fuera del JSX
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
      title: "Hidalgo en números",
      description: "Información relevante y sintetizada en tableros dinámicos e infografías por municipio",
      imageUrl: "./images/sec/2.png",
      linkUrl: "./pags/h_numeros.php"
    },
     {
      title: "Hidalgo en números",
      description: "Información relevante y sintetizada en tableros dinámicos e infografías por municipio",
      imageUrl: "./images/sec/2.png",
      linkUrl: "./pags/h_numeros.php"
    },
     {
      title: "Hidalgo en números",
      description: "Información relevante y sintetizada en tableros dinámicos e infografías por municipio",
      imageUrl: "./images/sec/2.png",
      linkUrl: "./pags/h_numeros.php"
    },
     {
      title: "Hidalgo en números",
      description: "Información relevante y sintetizada en tableros dinámicos e infografías por municipio",
      imageUrl: "./images/sec/2.png",
      linkUrl: "./pags/h_numeros.php"
    },
    
    // ... puedes agregar más secciones aquí
  ];

  return (
    <div className="app">
      <Navbar />

      {/* Contenido principal */}
      <main>
        <SectionsGrid sections={sectionsData} />
      </main>

      <Footer />
    </div>
  );
};

export default App;