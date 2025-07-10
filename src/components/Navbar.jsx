import React, { useState } from 'react';
import '../../src/assets/css/style.css';
import '../assets/css/fonts/flaticon/font/flaticon.css'
import '../assets/css/fonts/icomoon/style.css'
import '../../src/assets/css/glightbox.min.css'

// import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu */}
      
      <div className={`site-mobile-menu site-navbar-target ${isMenuOpen ? 'active' : ''}`}>
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle" onClick={toggleMenu}></span>
          </div>
          <img src="images/logo_menu2.png" alt="Menú SIGEH" className="mobile-menu-image" />
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      
      {/* Top Nav */}
      <nav className="site-nav nav-top">
        <div className="container">
          <div className="menu-bg-wrap">
            <div className="site-navigation">
              <div className="row g-0 align-items-center">
                <div className="col-2">
                  {/* <Link to="/" className="logo m-0 float-start"> */}
                  <a href="/" className="logo m-0 float-start">
                    <img src="./images/logo_gobhidalgo.png" alt="Logo SIGEH" style={{paddingBottom: '10px'}} />
                  </a>
                  {/* </Link> */}
                </div>
                
                {/* Desktop Menu (600px or more) */}
                <div className="col-8 text-right d-none d-sm-block">
                  <ul className="menu-derecha">
                    <li><a href="https://ruts.hidalgo.gob.mx/" target="_blank" rel="noopener noreferrer">Trámites y Servicios</a></li>
                    <li><a href="https://gobierno.hidalgo.gob.mx/" target="_blank" rel="noopener noreferrer">Gobierno</a></li>
                    <li><a href="https://www.hidalgo.gob.mx/#buzon" target="_blank" rel="noopener noreferrer">Buzón Ciudadano</a></li>
                    <li><a href="https://gobierno.hidalgo.gob.mx/AvisoPrivacidad" target="_blank" rel="noopener noreferrer">Aviso de privacidad</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Nav */}
      <nav className="site-nav nav-bottom">
        <div className="container">
          <div className="menu-bg-wrap">
            <div className="site-navigation">
              <div className="row g-0 align-items-center">
                <div className="col-2">
                  {/* <Link to="/" className="logo m-0 float-start">SIGEH<span className="text-primary"></span></Link> */}
                  <a href="/" className="logo m-0 float-start">SIGEH<span className="text-primary"></span></a>
                </div>
                
                <div className="col-8 text-center">
                  <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                    <li><a href="/">Inicio</a></li>
                    {/* <li><Link to="/solicitud-productos">Solicitud de Productos</Link></li> */}
                    <li><a href="./pags/h_productos.php#solicitud">Solicitud de Productos</a></li>
                    
                    <li className="has-children">
                      <a>Mapas</a>
                      <ul className="dropdown">
                        {/* <li><Link to="/hidalgo-en-mapas">Hidalgo en Mapas</Link></li> */}
                        <li><a href="./pags/h_mapas.php">Hidalgo en Mapas</a></li>
                        <li><a href="./maps/atlas.html" style={{color: 'orange', cursor: 'default'}}>Atlas interactivo del estado de Hidalgo</a></li>
                      </ul>
                    </li>
                    
                    <li className="has-children">
                      <a>Estadísticas</a>
                      <ul className="dropdown">
                        <li className="has-children">
                          {/* <Link to="/mapas-web">Mapas Web y Proyectos Específicos</Link> */}
                          <a href="./pags/h_numeros.php">Mapas Web y Proyectos Específicos</a>
                          <ul className="dropdown">
                            {/* <li><Link to="/rellenos-sanitarios">Relleno Sanitario</Link></li> */}
                            <li><a href="./pags/rellenos">Relleno Sanitario</a></li>
                            {/* <li><Link to="/complejidad-economica">Complejidad Economica</Link></li> */}
                            <li><a href="./pags/complejidad">Complejidad Economica</a></li>
                            {/* <li><Link to="/prioridad-alimentaria">Prioridad Alimentaria</Link></li> */}
                            <li><a href="./pags/alimentario">Prioridad Alimentaria</a></li>
                          </ul>
                        </li>
                        
                        <li className="has-children">
                          {/* <Link to="/hidalgo-en-numeros">Hidalgo en Números</Link> */}
                          <a href="pags/h_numeros.php">Hidalgo en Números</a>
                          <ul className="dropdown">
                            {/* <li><Link to="/infografias-municipales">Infografías municipales</Link></li> */}
                            <li><a href="./pags/infografias">Infografías municipales</a></li>
                            {/* <li><Link to="/banco-informacion">Banco único de Información Estadística</Link></li> */}
                            <li><a href="./pags/consulta_mun.php">Banco único de Información Estadística</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    
                    {/* <li><Link to="/marco-normativo">Marco Normativo</Link></li> */}
                    <li><a href="./pags/h_normatividad.php">Marco Normativo</a></li>
                  </ul>
                </div>
                
                <div className="col-2 text-end">
                  <a href="#" className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light" onClick={toggleMenu}>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;