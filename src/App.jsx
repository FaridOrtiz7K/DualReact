import React from 'react';
import Navbar from './components/Navbar';//importar NavBar
import Footer from './components/Footer';//importar SectionsGrid
import MapSection from './components/MapSection';//importar MapSection
import Banner from './components/Banner';//importar Banner
import { SectionsGrid } from './components/SectionCard'; //importar SectionsGrid

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
    <div className="app">
      <Navbar />

      {/* Contenido principal */}
      <main>

        <SectionsGrid sections={sectionsData} />
        <div>
          <Banner items={customBanners} />
        </div>
        <MapSection
          title="UBICACIÓN OFICIAL"
          mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.994347693391!2d-98.8041431242979!3d20.134283417897844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d10a8d523d568d%3A0x92d9d067fe2857fc!2sCITNOVA!5e0!3m2!1ses-419!2smx!4v1709925226635!5m2!1ses-419!2smx"
        />
      </main>

      <Footer />
    </div>
  );
};

export default App;