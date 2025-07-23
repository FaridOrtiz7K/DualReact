import React from 'react';
import Banner_P from '../../components/Banner_P'; 
import TabsSection from './components/TabsSection';
import MapSelector from './components/MapSelector';
import RequestForm from './components/RequestForm';

import productosImage from '/images/productos.jpg';

const ProductsPage = () => {
  const bannerData = {
    titulo: "Productos y servicios", 
    subtitulo: "Cartografía temática, análisis de datos, geoestadística, entre otros servicios que ofrece el SIGEH",
    imagenFondo: productosImage 
  };

  return (
    <div className="products-page">
      <Banner_P {...bannerData} />
      
      <section className="section">
        <div className="container">
          <TabsSection />
        </div>
      </section>

      <section className="container">
        <h2>Banco de mapas</h2>
        <hr className="customhr" />
        <MapSelector />
      </section>

      <section className="container" id="solicitud">
        <RequestForm />
      </section>
    </div>
  );
};

export default ProductsPage;