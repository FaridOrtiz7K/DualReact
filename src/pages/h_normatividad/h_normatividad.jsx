import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import NormativeList from '../components/NormativeList';

const NormativePage = () => {
  const bannerData = {
    title: "Marco Normativo",
    subtitle: "Leyes, reglamentos y normas que fundamentan al SIGEH",
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../images/libros.jpg')"
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
    // ... otros elementos normativos
  ];

  return (
    <div className="normative-page">
      <Header />
      <Banner {...bannerData} />
      
      <section className="container">
        <div>
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
      
      <Footer />
    </div>
  );
};

export default NormativePage;