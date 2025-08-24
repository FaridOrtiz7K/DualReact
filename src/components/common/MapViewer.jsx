import React, { useState } from 'react';
import './MapViewer.css';

const MapViewer = ({ isOpen, onClose, mapPath }) => {
  if (!isOpen) return null;

  return (
    <div className="map-viewer-overlay">
      <div className="map-viewer-container">
        <div className="map-viewer-header">
          <h3>Visualizador de Mapa</h3>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="map-viewer-content">
          <iframe
            src={mapPath}
            title="Mapa Interactivo"
            className="map-iframe"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default MapViewer;