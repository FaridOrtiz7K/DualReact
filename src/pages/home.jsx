import React from 'react';
import MapSection from '../components/MapSection';
import Banner from '../components/Banner';
import VideoPopup from '../components/VideoPopup';
import { SectionsGrid } from '../components/SectionCard';
import titleimage from '../components/titleImage';


const Home = () => {
  const sectionsData = [
    {
      title: "Hidalgo en mapas",
      description: "Mapas interactivos de interés ciudadano, gastronomía, recreación, cultura, entre otros temas",
      imageUrl: "./images/sec/1.png",
      linkUrl: "/h_mapas"
    },
    {
      title: "Hidalgo en números",
      description: "Información relevante y sintetizada en tableros dinámicos e infografías por municipio",
      imageUrl: "./images/sec/2.png",
      linkUrl: "/h_numeros"
    },
    {
       title: "Monitoreo de indicadores nacionales",
      description: "Tableros donde se muestra la posición de Hidalgo con respecto a indicadores nacionales",
      imageUrl: "./images/sec/3.png",
      linkUrl: "/mantenimiento"
    },
    {
      title: "Atlas interactivo del estado de Hidalgo",
      description: "Más de 100 capas de información geográfica relevante categorizada por sectores",
      imageUrl: "./images/atlas.png",
      linkUrl: "/mantenimiento"
    },
    {
      title: "Productos y servicios",
      description: "Cartografía temática, análisis de datos, geoestadística, entre otros servicios que ofrece el SIGEH",
      imageUrl: "./images/sec/5.png",
      linkUrl: "/h_productos"
    },
    {
      title: "Marco Normativo",
      description: "Normas y bases legales vigentes y actualizadas del uso y manejo de información estadística y geográfica",
      imageUrl: "./images/sec/6.jpg",
      linkUrl: "/h_normatividad"
    },
  ];

  const customBanners = [
    {
      pdfLink: "documents/pdf/carta_geo_23.pdf",
      imageSrc: "images/banner_carta.png",
      altText: "Carta geográfica"
    },
    {
      pdfLink: "documents/pdf/Lineamientos_PED.pdf",
      imageSrc: "images/banner_lineamientos.png",
      altText: "Lineamientos PED"
    }
  ];

  return (
    <main>
      <titleimage></titleimage>
      <SectionsGrid sections={sectionsData} />
      <div>
        <Banner items={customBanners} />
      </div>
      <MapSection
        title="UBICACIÓN"
        mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.994347693391!2d-98.8041431242979!3d20.134283417897844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d10a8d523d568d%3A0x92d9d067fe2857fc!2sCITNOVA!5e0!3m2!1ses-419!2smx!4v1709925226635!5m2!1ses-419!2smx"
      />
      <hr></hr>
      <VideoPopup />
    </main>
  );
};

export default Home;