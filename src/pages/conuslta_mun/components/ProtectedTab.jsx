import React, { useState } from 'react';

const ProtectedTab = ({ iframeSrc, password, buttonText }) => {
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState('');

  const handlePasswordCheck = () => {
    const userInput = prompt("Ingrese la contraseña para acceder:");
    if (userInput === password) {
      setAccessGranted(true);
      setError('');
    } else {
      setError("Contraseña incorrecta. Acceso denegado.");
    }
  };

  return (
    <div>
      {accessGranted ? (
        <>
          <p>Contenido protegido</p>
          <iframe
            width="100%"
            height="700"
            src={iframeSrc}
            frameBorder="0"
            style={{ border: '0' }}
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            title="Contenido protegido"
          />
          <div className="col-md-12 portfolio-item" align="center" style={{ padding: '3%' }}>
            <button type="button" className="btn btn-primary">{buttonText}</button>
          </div>
        </>
      ) : (
        <div>
          <p>Este contenido está protegido por contraseña</p>
          <button 
            onClick={handlePasswordCheck}
            className="btn btn-primary"
          >
            Acceder con contraseña
          </button>
          {error && <div className="error-message">{error}</div>}
        </div>
      )}
    </div>
  );
};

export default ProtectedTab;