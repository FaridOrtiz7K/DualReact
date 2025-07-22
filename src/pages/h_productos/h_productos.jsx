import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import TabsSection from './components/TabsSection';
import MapSelector from './components/MapSelector';
import RequestForm from './components/RequestForm';
const ProductsPage = () => {
  const bannerData = {
    title: "Productos y servicios",
    subtitle: "Cartografía temática, análisis de datos, geoestadística, entre otros servicios que ofrece el SIGEH",
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('public/images/productos.jpg')"
  };

  return (
    <div className="products-page">
      <Navbar />
      <Banner {...bannerData} />
      
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

      <Footer />
    </div>
  );
};

export default ProductsPage;