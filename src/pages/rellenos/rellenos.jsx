import React from 'react';

const Rellenos = () => {
  return (
    <div style={{ height: '100vh', width: '100%', marginTop: '80px' }}>
      <iframe 
        src="src/pages/rellenos/index.php"
        title="Relleno Sanitario"
        width="100%"
        height="100%"
        style={{ display: 'block' }}
      />
    </div>
  );
};

export default Rellenos;