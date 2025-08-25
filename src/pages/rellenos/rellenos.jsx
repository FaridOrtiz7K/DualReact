import React, { useState, useEffect } from 'react';

const PHPViewer = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showReload, setShowReload] = useState(false);
  const [iframeKey, setIframeKey] = useState(0); // Para forzar recarga del iframe

  // Recargar el iframe después de un tiempo si no carga
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!iframeLoaded) {
        setShowReload(true);
      }
    }, 10000); // 10 segundos

    return () => clearTimeout(timer);
  }, [iframeLoaded]);

  const handleReload = () => {
    setIframeKey(prev => prev + 1); // Cambiar la key fuerza el recargo del iframe
    setIframeLoaded(false);
    setShowReload(false);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Encabezado */}
      <div style={{ 
        padding: '15px 20px', 
        backgroundColor: '#2c3e50', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <a 
          href="/" 
          style={{ 
            textDecoration: 'none', 
            color: '#ecf0f1', 
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 15px',
            borderRadius: '4px',
            backgroundColor: '#3498db',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
        >
          <span>←</span> Volver al inicio
        </a>
        
        <h1 style={{ 
          margin: 0, 
          fontSize: '1.8rem', 
          color: '#ecf0f1',
          textAlign: 'center',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
        }}>
          Aptitud Relleno Sanitario
        </h1>
        
        <div style={{ width: '110px' }}></div> {/* Espaciador para equilibrar */}
      </div>

      {/* Panel de información */}
      <div style={{
        padding: '10px 20px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #dee2e6',
        fontSize: '14px',
        color: '#6c757d'
      }}>
        Esta visualización carga directamente la herramienta de análisis de aptitud para rellenos sanitarios.
        {!iframeLoaded && " Cargando..."}
      </div>

      {/* Contenedor principal */}
      <div style={{ flex: 1, position: 'relative' }}>
        {/* Indicador de carga */}
        {!iframeLoaded && (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '400px',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              border: '5px solid #f3f3f3',
              borderTop: '5px solid #3498db',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            <span style={{ fontSize: '16px', color: '#6c757d' }}>
              Cargando herramienta de mapas...
            </span>
            
            {showReload && (
              <button 
                onClick={handleReload}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Reintentar carga
              </button>
            )}
          </div>
        )}

        {/* Iframe que carga la página PHP */}
        <iframe
          key={iframeKey}
          src="./src/pages/rellenos/index.php"  {/* Ajusta esta ruta según donde esté tu PHP */}
          style={{ 
            width: '100%', 
            height: iframeLoaded ? 'calc(100vh - 130px)' : '0', 
            border: 'none',
            display: iframeLoaded ? 'block' : 'none'
          }}
          onLoad={() => {
            setIframeLoaded(true);
            setShowReload(false);
          }}
          onError={() => setShowReload(true)}
          title="Aptitud Relleno Sanitario"
          allowFullScreen
        />
      </div>

      {/* Estilos CSS en el componente */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .php-frame-container {
            position: relative;
            width: 100%;
            height: 80vh;
            border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
          }
          
          .php-frame-loading {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            background-color: #f8f9fa;
          }
        `}
      </style>
    </div>
  );
};

export default PHPViewer;