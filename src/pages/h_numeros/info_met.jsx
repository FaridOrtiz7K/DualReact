
import './components/style_info_met.css';
import bannerImage from '/images/infografia_metro.png';

const InfografiasMetro = () => {
  const zonasMetropolitanas = [
    {
      nombre: "ZONA METROPOLITANA DE PACHUCA",
      archivo: "Zona_Metropolitana_de_Pachuca.pdf",
      color: "#198754" // Verde
    },
    {
      nombre: "ZONA METROPOLITANA DE TULA",
      archivo: "Zona_Metropolitana_de_Tula.pdf",
      color: "#bc955c" // Amarillo
    },
    {
      nombre: "ZONA METROPOLITANA DE TULANCINGO",
      archivo: "Zona_Metropolitana_de_Tulancingo.pdf",
      color: "#691c32" // Rojo
    }
  ];

  return (
    <>
      
      {/* Banner Hero */}
      <div 
        className="hero-banner" 
        style={{ 
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImage}) no-repeat center`,
          backgroundSize: 'cover'
        }}
      >
        
        <div className="container">
          <div className="hero-content">
            <h1>Infografías Metropolitanas</h1>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <main className="main-content">
        <div className="container">
          <div className="zonas-grid">
            {zonasMetropolitanas.map((zona, index) => (
              <div 
                key={index} 
                className="zona-card"
                style={{ borderLeft: `5px solid ${zona.color}` }}
              >
                <a 
                  href={`/metropolitanas/${zona.archivo}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="zona-link"
                >
                  {zona.nombre}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

    </>
  );
};

export default InfografiasMetro;