
import Banner_P from '../../components/Banner_P'; 
import InfoCard from './components/InfoCard';
import productosImage from '/images/tableros.jpg';


const NumbersPage = () => {
  const bannerData = {
    title: "Hidalgo en Números",
    subtitle: "Información relevante y sintetizada en tableros dinámicos e infografías por municipio",
     imagenFondo: productosImage 
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
      altText: "Infografía Municipal",
      target: "_self"
    },
    {
      imageSrc: "../images/infografia_regional.png",
      link: "info_reg",
      altText: "Infografía Regional",
      target: "_self"
    },
    {
      imageSrc: "../images/infografia_metro.png",
      link: "info_met",
      altText: "Infografía Metropolitana",
      target: "_self"
    },
    {
      imageSrc: "../images/banco.png",
      link: "/consulta_mun",
      altText: "Banco de datos municipales",
      target: "_self"
    }
  ];

  return (
    <div className="numbers-page original-numbers-page">
      <Banner_P {...bannerData} />
      
      <section className="section original-section">
        {infoCards.map((card, index) => (
          <div className="container original-card-container" key={index}>
            <InfoCard 
              imageSrc={card.imageSrc}
              link={card.link}
              altText={card.altText}
              target={card.target}
            />
          </div>
        ))}
        
        <div className="container original-footer-container">
          <hr className="red small-margin original-hr" />
          <div className="col-lg-3 original-back-link">
            <a href="/" className="read-more original-read-more">Volver</a>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default NumbersPage;