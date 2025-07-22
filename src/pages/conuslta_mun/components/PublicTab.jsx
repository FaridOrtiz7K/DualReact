import React from 'react';

const PublicTab = () => {
  return (
    <div id="mun">
      <p>Contenido público</p>
      <iframe 
        width="100%" 
        height="700" 
        src="http://p-sigeh.hidalgo.gob.mx/buie/" 
        frameBorder="0" 
        style={{ border: '0' }}
        allowFullScreen 
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        title="Datos públicos por municipio"
      />
    </div>
  );
};

export default PublicTab;