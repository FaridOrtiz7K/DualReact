import React, { useState, useEffect, useRef } from 'react';
import '../../src/assets/css/style.css';
import '../assets/css/fonts/icomoon/style.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuToggleRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('offcanvas-menu', !isMenuOpen);
  };

  useEffect(() => {
    // Clonar navegación para el menú móvil
    const cloneNavigation = () => {
      const jsCloneNavs = document.querySelectorAll('.js-clone-nav');
      const siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');

      // Limpiar el menú móvil antes de clonar
      if (siteMobileMenuBody) {
        siteMobileMenuBody.innerHTML = '';
      }

      jsCloneNavs.forEach(nav => {
        const navCloned = nav.cloneNode(true);
        navCloned.setAttribute('class', 'site-nav-wrap');
        siteMobileMenuBody?.appendChild(navCloned);
      });
    };

    // Configurar dropdowns del menú móvil
    const setupMobileDropdowns = () => {
      const hasChildrens = document.querySelector('.site-mobile-menu')?.querySelectorAll('.has-children');
      
      if (!hasChildrens) return;

      let counter = 0;
      hasChildrens.forEach(hasChild => {
        const refEl = hasChild.querySelector('a');
        if (!refEl) return;

        // Crear flecha de colapso si no existe
        if (!hasChild.querySelector('.arrow-collapse')) {
          const newElSpan = document.createElement('span');
          newElSpan.setAttribute('class', 'arrow-collapse collapsed');
          hasChild.insertBefore(newElSpan, refEl);
        }

        const arrowCollapse = hasChild.querySelector('.arrow-collapse');
        arrowCollapse.setAttribute('data-bs-toggle', 'collapse');
        arrowCollapse.setAttribute('data-bs-target', `#collapseItem${counter}`);

        const dropdown = hasChild.querySelector('.dropdown');
        dropdown?.setAttribute('class', 'collapse');
        dropdown?.setAttribute('id', `collapseItem${counter}`);

        counter++;
      });
    };

    // Manejar clicks fuera del menú
    const handleDocumentClick = (event) => {
      const isClickInside = mobileMenuRef.current?.contains(event.target);
      const isToggleClick = menuToggleRef.current?.contains(event.target);

      if (!isClickInside && !isToggleClick && isMenuOpen) {
        toggleMenu();
      }
    };

    // Ejecutar las funciones necesarias
    cloneNavigation();
    
    // Usar setTimeout para asegurar que el DOM está listo
    const timer = setTimeout(() => {
      setupMobileDropdowns();
    }, 100);

    // Agregar event listeners
    document.addEventListener('click', handleDocumentClick);

    // Limpieza
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className={`site-mobile-menu site-navbar-target ${isMenuOpen ? 'active' : ''}`}
      >
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
                  <a href="/" className="logo m-0 float-start">
                    <img src="./images/logo_gobhidalgo.png" alt="Logo SIGEH" style={{paddingBottom: '10px'}} />
                  </a>
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
                  <a href="/" className="logo m-0 float-start">SIGEH<span className="text-primary"></span></a>
                </div>
                
                <div className="col-8 text-center">
                  <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                    <li><a href="/">Inicio</a></li>
<<<<<<< HEAD
                    <li><Link to="/h_productos">Solicitud de Productos</Link></li>
=======
                    <li><a href="/h_productos">Solicitud de Productos</a></li>
>>>>>>> 5b0a24d98cdb1464c32290c34209282c0fcd3eba
                    
                    <li className="has-children">
                      <a>Mapas</a>
                      <ul className="dropdown">
<<<<<<< HEAD
                        <li><a href="./pages/h_mapas/h_mapas.jsx">Hidalgo en Mapas</a></li>
                        <li><a href="./maps/atlas.html" style={{color: 'orange', cursor: 'default'}}>Atlas interactivo del estado de Hidalgo</a></li>
=======
                        <li><a href="/h_mapas">Hidalgo en Mapas</a></li>
                        <li><a href="/atlas" style={{color: 'orange', cursor: 'default'}}>Atlas interactivo del estado de Hidalgo</a></li>
>>>>>>> 5b0a24d98cdb1464c32290c34209282c0fcd3eba
                      </ul>
                    </li>
                    
                    <li className="has-children">
                      <a>Estadísticas</a>
                      <ul className="dropdown">
                        <li className="has-children">
                          <a href="/h_numeros">Mapas Web y Proyectos Específicos</a>
                          <ul className="dropdown">
                            <li><a href="/rellenos">Relleno Sanitario</a></li>
                            <li><a href="/complejidad">Complejidad Economica</a></li>
                            <li><a href="/alimentario">Prioridad Alimentaria</a></li>
                          </ul>
                        </li>
                        
                        <li className="has-children">
                          <a href="/h_numeros">Hidalgo en Números</a>
                          <ul className="dropdown">
                            <li><a href="/infografias">Infografías municipales</a></li>
                            <li><a href="/consulta_mun">Banco único de Información Estadística</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    
                    <li><a href="/h_normatividad">Marco Normativo</a></li>
                  </ul>
                </div>
                
                <div className="col-2 text-end">
                  <a 
                    ref={menuToggleRef}
                    href="#" 
                    className={`burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light ${isMenuOpen ? 'active' : ''}`} 
                    onClick={toggleMenu}
                  >
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