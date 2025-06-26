import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="widget">
              <img src="./images/logo_gobhidalgo.png" alt="Gobierno de Hidalgo" />
            </div>
            
            <div className="widget" style={{textAlign: 'center'}}>
              <h3>Social</h3>
              <ul className="list-unstyled social">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100069229599131" target="_blank" rel="noopener noreferrer">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/gobiernohidalgo?s=20" target="_blank" rel="noopener noreferrer">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-4 ps-lg-5">
            <div className="widget">
              <img src="./images/escudo_blanco.svg" alt="Escudo de Hidalgo" />
              <p style={{textAlign: 'center'}}>© {new Date().getFullYear()} Gobierno del Estado de Hidalgo</p>
            </div>
          </div>
          
          <div className="col-lg-4" style={{textAlign: 'center', fontWeight: 'normal'}}>
            <div className="widget">
              <h2 className="mb-4">Contacto</h2>
              <h3 style={{fontWeight: 'normal'}}>CITNOVA | EDIFICIO INNOVACIÓN <br /><br /></h3>
              <h3 style={{fontWeight: 'normal'}}>
                Boulevard Circuito La Concepción #3 <br />
                Colonia La Concepción, CP 42162,<br />
                San Agustín Tlaxiaca, Hidalgo
              </h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;