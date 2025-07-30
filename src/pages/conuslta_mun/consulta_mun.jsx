import React, { useState } from 'react';
import TabsComponent from './components/TabsComponent';
import './components/style.css'

const DataConsultPage = () => {
  const [activeTab, setActiveTab] = useState('mun');
  const [theme, setTheme] = useState('');
  const [map, setMap] = useState('');
  const [mapsList, setMapsList] = useState([]);
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  // Datos de los mapas por tema
  const themesData = {
    tema1: [
      { path: '../pdf/visualizador_mapas/1demografia/PUEBLOS INDIGENAS MIGRANTES.pdf', name: 'Pueblos Indígenas Migrantes' },
      { path: 'pdf/visualizador_mapas/1demografia/REZAGO EN EL MUNICIPIO DE METEPEC.pdf', name: 'Rezago en el Municipio de Metepec' }
    ],
    tema2: [
      { path: '../pdf/visualizador_mapas/2energia/Plantas_Energia_Solar_Hgo.pdf', name: 'Plantas Energía Solar Hgo' }
    ],
    // ... otros temas
  };

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
    setMap('');
    setShowPdfViewer(false);
    
    if (selectedTheme) {
      setMapsList(themesData[selectedTheme] || []);
    } else {
      setMapsList([]);
    }
  };

  const handleMapChange = (e) => {
    setMap(e.target.value);
    setShowPdfViewer(false);
  };

  const handleViewMap = () => {
    if (map) {
      setPdfUrl(map);
      setShowPdfViewer(true);
    }
  };

  const tabs = [
    {
      id: 'mun',
      label: 'Por Municipio',
      content: (
        <div>
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
      )
    },
    {
      id: 'citypark',
      label: 'CITYPARK',
      protected: true,
      password: "secure456",
      content: (
        <div>
          <p>Contenido protegido de la pestaña CITYPARK</p>
          <iframe
            width="100%"
            height="700"
            src="https://lookerstudio.google.com/embed/reporting/acb40988-5fe0-4334-8480-054b31b3d3d3/page/p_o2s43u4eid"
            frameBorder="0"
            style={{ border: '0' }}
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            title="CITYPARK"
          />
          <div className="col-md-12 portfolio-item" align="center" style={{ padding: '3%' }}>
            <button type="button" className="btn btn-primary">Enlace al bucket de información</button>
          </div>
        </div>
      )
    },
    {
      id: 'cityflow',
      label: 'CITYFLOW',
      protected: true,
      password: "password123",
      content: (
        <div>
          <p>Contenido protegido de la pestaña CITYFLOW</p>
          <iframe
            width="100%"
            height="700"
            src="https://lookerstudio.google.com/embed/reporting/f2f5e981-374f-4301-897e-6ce751a7f26c/page/p_7an505870c"
            frameBorder="0"
            style={{ border: '0' }}
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            title="CITYFLOW"
          />
          <div className="col-md-12 portfolio-item" align="center" style={{ padding: '3%' }}>
            <button type="button" className="btn btn-primary">Enlace al bucket de información</button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="data-consult-page">
      
      <section className="section">
        <div className="container" style={{ paddingTop: '2%', paddingBottom: '5%' }}>
          <h2>Consulta de datos del Banco Único de Información Estadística y Geográfica</h2>
          <br />
          
          <TabsComponent 
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          
          {/* Selectores de tema y mapa */}
          <div className="map-selector-container">
            <div className="form-group">
              <label htmlFor="themeSelect">Seleccione un tema:</label>
              <select 
                id="themeSelect" 
                className="form-control" 
                value={theme}
                onChange={handleThemeChange}
              >
                <option value="">-- Seleccione --</option>
                <option value="tema1">Demografía</option>
                <option value="tema2">Energía</option>
                <option value="tema3">Industria</option>
                <option value="tema4">Infraestructura</option>
                <option value="tema5">Medio Físico Natural</option>
                <option value="tema6">Límites Administrativos</option>
                <option value="tema7">Desarrollo Social</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="mapSelect">Seleccione un mapa:</label>
              <select 
                id="mapSelect" 
                className="form-control" 
                value={map}
                onChange={handleMapChange}
                disabled={!theme}
              >
                <option value="">-- Seleccione --</option>
                {mapsList.map((item, index) => (
                  <option key={index} value={item.path}>{item.name}</option>
                ))}
              </select>
            </div>
            
            <button 
              id="viewMap" 
              className="btn btn-primary"
              onClick={handleViewMap}
              disabled={!map}
            >
              Ver Mapa
            </button>
          </div>
          
          {/* Visor de PDF */}
          {showPdfViewer && (
            <div className="pdf-viewer-container">
              <iframe 
                id="pdfViewer" 
                src={pdfUrl} 
                width="100%" 
                height="700" 
                frameBorder="0"
                title="Visor de PDF"
              ></iframe>
            </div>
          )}
        </div>
      </section>
          </div>
  );
};

export default DataConsultPage;