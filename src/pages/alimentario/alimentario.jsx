import React, { useState } from 'react';

const Alimentario = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div style={{ 
      height: '100vh', 
      width: '100%', 
      paddingTop: '80px',
      position: 'relative',
      backgroundColor: '#f5f5f5'
    }}>
      {isLoading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 10
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '5px solid #f3f3f3',
            borderTop: '5px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }}></div>
          <p>Cargando contenido de Prioridad Alimentaria...</p>
        </div>
      )}
      
      {hasError ? (
        <div style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>⚠️</div>
          <h3>Error al cargar el contenido</h3>
          <p>No se pudo cargar la página de Prioridad Alimentaria. Por favor, verifica que el archivo exista en la ruta especificada.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Reintentar
          </button>
        </div>
      ) : (
        <iframe 
          src="src/pages/alimentario/index.php"
          title="Prioridad Alimentaria"
          width="100%"
          height="100%"
          style={{ 
            border: 'none',
            display: 'block',
            visibility: isLoading ? 'hidden' : 'visible'
          }}
          onLoad={handleLoad}
          onError={handleError}
          allowFullScreen
        />
      )}
      
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Alimentario;