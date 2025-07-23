import React from 'react';
import styles from '../assets/css/Banner_P.module.css';

const Banner_P = ({ 
  titulo = "Productos y servicios", 
  subtitulo = "Cartografía temática, análisis de datos, geoestadística, entre otros servicios que ofrece el SIGEH",
  imagenFondo = "", 
  altura = "auto",
  paddingTop = "80px",
  overlay = true,
  singlePage = true
}) => {
  const estiloBanner = {
    backgroundImage: imagenFondo ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imagenFondo})` : "none",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: altura,
    cursor: 'default'
  };

  return (
    <div className={`${styles.siteCover2} ${overlay ? styles.overlay : ''} ${singlePage ? styles.singlePage : ''}`} style={estiloBanner}>
      <div className="container">
        <div className={`row ${styles.sameHeight} justify-content-center`}>
          <div className="col-md-6">
            <div className={styles.postEntry}>
              <div className={styles.text} style={{ paddingTop }}>
                <h2>{titulo}</h2>
                <p className={styles.cardText}>{subtitulo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner_P;