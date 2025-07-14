import React, { useState } from 'react';

const MapSelector = () => {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedMap, setSelectedMap] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  const themeOptions = [
    { value: 'tema1', label: 'Demografía' },
    { value: 'tema2', label: 'Energía' },
    // ... otros temas
  ];

  const mapOptions = {
    tema1: [
      { value: '../../pdf/visualizador_mapas/1demografia/PUEBLOS INDIGENAS MIGRANTES.pdf', label: 'Pueblos indígenas migrantes' },
      // ... otros mapas
    ],
    // ... otros temas
  };

  const handleThemeChange = (e) => {
    const theme = e.target.value;
    setSelectedTheme(theme);
    setSelectedMap('');
    setPdfUrl('');
  };

  const handleMapChange = (e) => {
    setSelectedMap(e.target.value);
  };

  const handleViewMap = () => {
    setPdfUrl(selectedMap);
  };

  return (
    <div className="select-container">
      <div className="select-box">
        <label htmlFor="themeSelect">Selecciona un Tema:</label>
        <select 
          id="themeSelect" 
          className="theme-select"
          value={selectedTheme}
          onChange={handleThemeChange}
        >
          <option value="">-- Elige un Tema --</option>
          {themeOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      <div className="select-box">
        <label htmlFor="mapSelect">Selecciona un Mapa:</label>
        <select 
          id="mapSelect" 
          className="map-select"
          disabled={!selectedTheme}
          value={selectedMap}
          onChange={handleMapChange}
        >
          <option value="">-- Selecciona un mapa --</option>
          {selectedTheme && mapOptions[selectedTheme]?.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      <button 
        id="viewMap" 
        disabled={!selectedMap}
        onClick={handleViewMap}
      >
        Ver Mapa
      </button>

      {pdfUrl && (
        <div className="pdf-viewer-container">
          <iframe 
            id="pdfViewer" 
            src={pdfUrl}
            title="Visualizador de PDF"
            style={{ width: '100%', height: '600px' }}
          />
        </div>
      )}
    </div>
  );
};

export default MapSelector;