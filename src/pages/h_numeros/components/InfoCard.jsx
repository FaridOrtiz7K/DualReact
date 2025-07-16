import React from 'react';

const InfoCard = ({ imageSrc, link, altText, target }) => {
  return (
    <div className="card mb-3" style={{ borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' }}>
      <a href={link} target={target} rel={target ? "noopener noreferrer" : null}>
        <img 
          className="card-img-top vertigo-effect" 
          src={imageSrc} 
          alt={altText}
        />
      </a>
    </div>
  );
};

export default InfoCard;