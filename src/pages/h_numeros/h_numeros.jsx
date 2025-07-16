import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import InfoCard from '../components/InfoCard';

const NumbersPage = () => {
  const bannerData = {
    title: "Hidalgo en Números",
    subtitle: "Información relevante y sintetizada en tableros dinámicos e infografías por municipio",
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../images/tableros.jpg')"
  };

  const infoCards = [
    {
      imageSrc: "../images/infografia_estatal.png",
      link: "infografias/estatal/Hidalgo.pdf",
      altText: "Infografía Estatal",
      target: "_blank"
    },
    {
      imageSrc: "../images/infografia_municipal.png",
      link: "info_mun",
      altText: "Infografía Municipal"
    },
    {
      imageSrc: "../images/infografia_regional.png",
      link: "info_reg",
      altText: "Infografía Regional"
    },
    {
      imageSrc: "../images/infografia_metro.png",
      link: "info_met",
      altText: "Infografía Metropolitana"
    },
    {
      imageSrc: "../images/banco.png",
      link: "consulta_mun.php",
      altText: "Banco de datos municipales"
    }
  ];

  return (
    <div className="numbers-page">
      <Header />
      <Banner {...bannerData} />
      
      <section className="section">
        {infoCards.map((card, index) => (
          <div className="container" key={index}>
            <InfoCard 
              imageSrc={card.imageSrc}
              link={card.link}
              altText={card.altText}
              target={card.target}
            />
          </div>
        ))}
        
        <div className="container">
          <hr className="red small-margin" />
          <div className="col-lg-3">
            <a href="/" className="read-more">Volver</a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default NumbersPage;