import React from 'react';
import '../../src/assets/css/SectionCard.css';

const SectionCard = ({ 
  title, 
  description, 
  imageUrl, 
  linkUrl,
  backgroundImage = './images/logo_sigeh.png'
}) => {
  return (
    <section className="padding-8">
      <div className="container">
        <div className="row">
          <div className="site-cover site-cover-sm same-height single-page" 
               style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container">
              <div className="row same-height justify-content-center"></div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img src={imageUrl} className="card-img-top" alt={title} />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <a href={linkUrl} className="read-more">Entrar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
};

const SectionsGrid = ({ sections }) => {
  return (
    <section className="padding-8">
      <div className="container">
        <div className="row">
          <div className="site-cover site-cover-sm same-height single-page" 
               style={{ backgroundImage: "url('./images/logo_sigeh.png')" }}>
            <div className="container">
              <div className="row same-height justify-content-center"></div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {sections.map((section, index) => (
              <div className="col" key={index}>
                <div className="card h-100">
                  <img src={section.imageUrl} className="card-img-top" alt={section.title} />
                  <div className="card-body">
                    <h5 className="card-title">{section.title}</h5>
                    <p className="card-text">{section.description}</p>
                    <a href={section.linkUrl} className="read-more">Entrar</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
    </section>
  );
};


export { SectionCard, SectionsGrid };