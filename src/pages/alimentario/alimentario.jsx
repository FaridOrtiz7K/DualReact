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