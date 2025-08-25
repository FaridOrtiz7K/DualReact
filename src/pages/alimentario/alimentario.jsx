import React from 'react';

const Alimentario = () => {
  return (
    <div style={{ height: '100vh', width: '100%', marginTop: '80px' }}>
      <iframe 
        src="http://localhost:8080/alimentario/index.php"
        title="Prioridad Alimentaria"
        width="100%"
        height="100%"
        style={{ display: 'block' }}
      />
    </div>
  );
};

export default Alimentario;