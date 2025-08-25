import React from 'react';

const Complejidad = () => {
  return (
    <div style={{ height: '100vh', width: '100%', marginTop: '80px' }}>
      <iframe 
        src="http://localhost:8080/complejidad/index.php"
        title="Complejidad Económica"
        width="100%"
        height="100%"
        style={{ display: 'block' }}
      />
    </div>
  );
};

export default Complejidad;