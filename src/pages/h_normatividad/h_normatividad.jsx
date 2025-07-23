import React from 'react';
import Banner from '../../components/Banner_P';
import NormativeList from '../h_normatividad/components/NormativeList';

import productosImage from '/images/libros.jpg';

const NormativePage = () => {
  const bannerData = {
    titulo: "Marco Normativo",
    subtitulo: "Leyes, reglamentos y normas que fundamentan al SIGEH",
    imagenFondo: productosImage 
  };

  const normativeItems = [
    {
      title: "Constitución Política de los Estados Unidos Mexicanos (Artículo 26)",
      url: "http://sigeh.hidalgo.gob.mx/productos/norma/Constituci%C3%B3n%20Pol%C3%ADtica%20de%20los%20Estados%20Unidos%20Mexicanos.pdf"
    },
    {
      title: "DECRETO por el que se formula la Declaratoria de las Zonas de Atención Prioritaria para el año 2025",
      url: "https://dof.gob.mx/nota_detalle.php?codigo=5746130&fecha=24/12/2024"
    },
    {
      title: "Ley del Sistema Nacional de Información Estadística y Geográfica",
      url: "http://sigeh.hidalgo.gob.mx/productos/norma/LSNIEG.pdf"
    },
    {
      title: "Reglamento de la Ley de Información Estadística y Geográfica",
      url: "http://sigeh.hidalgo.gob.mx/productos/norma/Reglamento%20de%20la%20Ley%20de%20Informaci%C3%B3n%20Estad%C3%ADstica%20y%20Geogr%C3%A1fica.pdf"
    },
    {
      title: "Especificaciones Técnicas",
      url: "http://sigeh.hidalgo.gob.mx/productos/norma/Especificaciones_T%C3%A9cnicas.pdf"
    },
    {
      title: "Programa Estratégico SNIEG 2022-2046",
      url: "http://sigeh.hidalgo.gob.mx/productos/norma/Programa%20Estrat%C3%A9gico%20SNIEG_2022-2046.pdf"
    },
    {
      title: "Reglas para la integración y operación de los Comités Técnicos Especializados de los Subsistemas Nacionales de Información",
      url: "http://sigeh.hidalgo.gob.mx/productos/norma/Reglas%20para%20la%20integraci%C3%B3n%20y%20operaci%C3%B3n%20de%20los%20Comit%C3%A9s.pdf"
    },
    {
      title: "Norma Técnica del Proceso de Producción de Información Estadística y Geográfica para el INEGI",
      url: "http://sigeh.hidalgo.gob.mx/productos/norma/Norma%20T%C3%A9cnica%20del%20Proceso%20de%20Producci%C3%B3n%20de%20Informaci%C3%B3n%20Estad%C3%ADstica%20y%20Geogr%C3%A1fica%20para%20el%20INEGI_19Nov21.pdf"
    },
    {
      title: "Ley Orgánica de la Administración Pública (Artículo 47)",
      url: "http://sigeh.hidalgo.gob.mx/productos/norma/Ley%20Org%C3%A1nica%20de%20la%20Administraci%C3%B3n%20P%C3%BAblica.pdf"
    },
    {
      title: "Ley de Planeación y Prospectiva del Estado de Hidalgo",
      url: "http://sigeh.hidalgo.gob.mx/productos/norma/Ley%20de%20Planeaci%C3%B3n%20y%20Prospectiva%20del%20EstadodeHidalgo.pdf"
    },
    {
      title: "Reglamento Interior de la Unidad de Planeación y Prospectiva del Estado de Hidalgo",
      url: "http://sigeh.hidalgo.gob.mx/productos/norma/Reglamento%20interior%20de%20la%20Unidad%20de%20Planeaci%C3%B3n%20y%20Prospectiva.pdf"
    },
    {
      title: "Reglamento Interior de la Unidad de Planeación y Prospectiva del Estado de Hidalgo (Actualizado al mes de Marzo 2025)",
      url: "https://periodico.hidalgo.gob.mx/?tribe_events=periodico-oficial-ordinario-0-del-17-de-febrero-de-2025"
    },
    {
      title: "Lineamientos para el uso de la Información Estadística y Geográfica",
      url: "http://sigeh.hidalgo.gob.mx/productos/norma/lineamientos.pdf"
    },
  ];

  return (
    <div className="normative-page">
      <Banner {...bannerData} />
      
      <section className="container">
        <div style={{ paddingTop: "2rem" }}>
          <h2>Normativa de la información</h2>
          <hr className="customhr" />
        </div>
        
        <NormativeList items={normativeItems} />
        
        <hr className="customhr" />
        <div className="col-lg-3">
          <a href="/" className="read-more">Volver</a>
        </div>
        <br />
      </section>
      
    </div>
  );
};

export default NormativePage;