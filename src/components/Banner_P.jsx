import React from 'react';
import styles from '../assets/css/Banner_P.module.css';

const Banner_P = ({ 
  titulo = "Productos y servicios", 
  subtitulo = "Cartografía temática, análisis de datos, geoestadística, entre otros servicios que ofrece el SIGEH",
  imagenFondo = "", 
  altura = "400px",
  paddingTop = "80px"
}) => {
  const estiloBanner = {
    backgroundImage: imagenFondo ? `url(${imagenFondo})` : "none",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: altura,
    paddingTop: paddingTop
  };

  return (
    <div className={styles.bannerContainer} style={estiloBanner}>
      <div className={styles.bannerContent}>
        <div className={styles.textContent}>
          <h1 className={styles.titulo}>{titulo}</h1>
          <p className={styles.subtitulo}>{subtitulo}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner_P;