import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = ({ items }) => {
  return (
    <div className="container">
      <Carousel indicators interval={5000}>
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <a href={item.pdfLink} target="_blank" rel="noopener noreferrer">
              <img
                className="d-block w-100"
                src={item.imageSrc}
                alt={item.altText}
              />
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

// Valores por defecto para las props
Banner.defaultProps = {
  items: [
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
  ]
};

export default Banner;