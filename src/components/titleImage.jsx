//componete para agregar una imagen de titulo 
import React from 'react';
import logoImage from '/images/logo_sigeh.png?url'; //url de la imagen 

const HeroImage = () => {
  return (
    <div className="container">
      <div className="row">
        <div 
          className="site-cover site-cover-sm same-height single-page" 
          style={{ 
            backgroundImage: `url(${logoImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '300px' 
          }}
        >
          <div className="container">
            <div className="row same-height justify-content-center">
              {}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;