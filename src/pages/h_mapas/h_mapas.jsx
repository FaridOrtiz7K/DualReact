import React from 'react';
import Banner from '../../components/Banner_P';
import AccordionSection from './components/AccordionSection';

import productosImage from '/images/cel_map2.jpg';

const HidalgoMapsPage = () => {

  const bannerData = {
    titulo: "Hidalgo en Mapas",
    subtitulo: "Mapas interactivos de interés ciudadano, Gastronomía, recreación, Cultura, etc.",
    imagenFondo: productosImage 
  };

  const accordionData = [
    {
      id: "headingOne",
      title: "Recreación, Gastronomía y Turismo",
      icon: "/images/logos/turismo.png",
      items: [
        { name: "Rutas ciclismo de montaña", path: "hgoenmapas/RGyT/Rutas%20ciclismo%20de%20montaña.html" },
        { name: "Ciclovías", path: "hgoenmapas/RGyT/Ciclovías.html" },
        { name: "Senderos y rutas de trekking más populares", path: "hgoenmapas/RGyT/Senderos%20y%20rutas%20de%20trekking%20m%c3%a1s%20populares.html" },
        // ... otros items
      ],
      defaultOpen: true
    },
    {
      id: "headingTwo",
      title: "Cultura y Educación",
      icon: "/images/logos/cultura.png",
      items: [
        { name: "Museos", path: "hgoenmapas/CyE/Museos%20y%20Sitios%20Históricos.html" },
        { name: "Bibliotecas", path: "hgoenmapas/CyE/Bibliotecas.html" },
        // ... otros items
      ]
    },
    // ... otras secciones
  ];

  return (
    <div className="hidalgo-maps-page">
      <Banner {...bannerData} />
      
      <section className="section">
        <div className="container">
          <div className="accordion" id="accordionExample">
            {accordionData.map((section, index) => (
              <AccordionSection 
                key={index}
                id={`heading${index + 1}`}
                collapseId={`collapse${index + 1}`}
                {...section}
              />
            ))}
          </div>
          
          <hr className="red small-margin" />
          <div className="col-lg-3">
            <a href="/" className="read-more">Volver</a>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default HidalgoMapsPage;