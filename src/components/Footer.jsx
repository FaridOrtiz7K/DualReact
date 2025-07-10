import React from 'react';
import '../../src/assets/css/footer.css';

const Footer = () => {
  return (
    <div className="footer-container"> {/* Nuevo contenedor */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="widget">
              <img src="./images/logo_gobhidalgo.png" alt="Gobierno de Hidalgo" className="footer-logo" />
            </div>
            
            <div className="widget social-widget">
              <h3 className="social-title">Social</h3>
              <ul className="list-unstyled social">
                <li>
                  <a href="#">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="footer-section">
            <div className="widget">
              <img 
                src="./images/escudo_blanco.svg" 
                alt="Escudo de Hidalgo" 
                className="footer-shield" // Clase añadida
              />
              <p className="copyright">© {new Date().getFullYear()} Gobierno del Estado de Hidalgo</p>
            </div>
          </div>
          
          <div className="footer-section contact-section">
            <div className="widget">
              <h2 className="contact-title">Contacto</h2>
              <br></br>
              <p className="contact-organization">CITNOVA | EDIFICIO INNOVACIÓN</p>
              <br></br>
              <address>
                Boulevard Circuito La Concepción #3 <br />
                Colonia La Concepción, CP 42162,<br />
                San Agustín Tlaxiaca, Hidalgo
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;