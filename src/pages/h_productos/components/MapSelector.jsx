import React, { useState, useEffect } from 'react';

const MapSelector = () => {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedMap, setSelectedMap] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Datos completos de mapas por categoría
  const mapCategories = [
    {
      id: 'tema1',
      name: 'Demografía',
      maps: [
        {
          id: 'map1-1',
          name: 'Pueblos indígenas migrantes',
          path: 'documents/pdf/pdf/visualizador_mapas/1demografia/PUEBLOS INDIGENAS MIGRANTES.pdf'
        },
        {
          id: 'map1-2',
          name: 'Rezago en el municipio de Metepec',
          path: 'documents/pdf/pdf/visualizador_mapas/1demografia/REZAGO EN EL MUNICIPIO DE METEPEC.pdf'
        },
        {
          id: 'map1-3',
          name: 'Proyectos infraestructura demográfica lengua indígena',
          path: 'documents/pdf/pdf/visualizador_mapas/1demografia/PROYECTOS INF_DEMOGRAFICA LENGUA INDIGENA.pdf'
        }
      ]
    },
    {
      id: 'tema2',
      name: 'Energía',
      maps: [
        {
          id: 'map2-1',
          name: 'Plantas energía solar Hgo',
          path: 'documents/pdf/pdf/visualizador_mapas/2energia/Plantas_Energia_Solar_Hgo.pdf'
        },
        {
          id: 'map2-2',
          name: 'Centro cultural Ferrocarril',
          path: 'documents/pdf/pdf/visualizador_mapas/2energia/Centro cultural Ferrocarril y estación Ferrosur.pdf'
        }
      ]
    },
    {
      id: 'tema3',
      name: 'Industria',
      maps: [
        {
          id: 'map3-1',
          name: 'Parques industriales',
          path: 'documents/pdf/pdf/visualizador_mapas/3industria/Parques Industriales.pdf'
        },
        {
          id: 'map3-2',
          name: 'Proyecto Santa Clara',
          path: 'documents/pdf/pdf/visualizador_mapas/3industria/Proyecto Santa Clara.pdf'
        },
        {
          id: 'map3-3',
          name: 'Industrias en Actopan',
          path: 'documents/pdf/pdf/visualizador_mapas/3industria/Industrias en actopan.PNG'
        }
      ]
    },
    {
      id: 'tema4',
      name: 'Infraestructura',
      maps: [
        {
          id: 'map4-1',
          name: 'Proyectos infraestructura hidráulica',
          path: 'documents/pdf/pdf/visualizador_mapas/4infraestructura/PROYECTOS COL_PACHUCA INFRA_HIDRAULICA v2.pdf'
        },
        {
          id: 'map4-2',
          name: 'Proyectos PTARs',
          path: 'documents/pdf/pdf/visualizador_mapas/4infraestructura/PROYECTOS PTARs.pdf'
        },
        {
          id: 'map4-3',
          name: 'Infraestructura ferroviaria',
          path: 'documents/pdf/pdf/visualizador_mapas/4infraestructura/Infraestructura Ferroviaria.pdf'
        },
        {
          id: 'map4-4',
          name: 'Red vial',
          path: 'documents/pdf/pdf/visualizador_mapas/4infraestructura/Red_vial.pdf'
        },
        {
          id: 'map4-5',
          name: 'Hospitales de Metepec',
          path: 'documents/pdf/pdf/visualizador_mapas/4infraestructura/Hospitales de Metepec.pdf'
        }
      ]
    },
    {
      id: 'tema5',
      name: 'Medio natural',
      maps: [
        {
          id: 'map5-1',
          name: 'Precipitación',
          path: 'documents/pdf/pdf/visualizador_mapas/5medio_fisico_natural/Precipitacion.pdf'
        },
        {
          id: 'map5-2',
          name: 'Temperatura',
          path: 'documents/pdf/pdf/visualizador_mapas/5medio_fisico_natural/Temperatura.pdf'
        },
        {
          id: 'map5-3',
          name: 'Modelo digital de elevación',
          path: 'documents/pdf/pdf/visualizador_mapas/5medio_fisico_natural/Modelo digital de elevación del Estado de Hidalgo.pdf'
        },
        {
          id: 'map5-4',
          name: 'Uso de suelo en Metepec',
          path: 'documents/pdf/pdf/visualizador_mapas/5medio_fisico_natural/Uso de suelo en Metepec.pdf'
        }
      ]
    },
    {
      id: 'tema6',
      name: 'Límites administrativos',
      maps: [
        {
          id: 'map6-1',
          name: 'Regionalización',
          path: 'documents/pdf/pdf/visualizador_mapas/6limites_administrativos/Regionalizacion.pdf'
        },
        {
          id: 'map6-2',
          name: 'Distritos electorales',
          path: 'documents/pdf/pdf/visualizador_mapas/6limites_administrativos/Distritos electorales.pdf'
        },
        {
          id: 'map6-3',
          name: 'Macroregiones y microregiones',
          path: 'documents/pdf/pdf/visualizador_mapas/6limites_administrativos/Macroregiones y microregiones.pdf'
        }
      ]
    },
    {
      id: 'tema7',
      name: 'Desarrollo Social',
      maps: [
        {
          id: 'map7-1',
          name: 'Zonas prioritarias',
          path: 'documents/pdf/pdf/visualizador_mapas/7desarrollo_social/Zonas Prioritarias.pdf'
        },
        {
          id: 'map7-2',
          name: 'Producción de Café',
          path: 'documents/pdf/pdf/visualizador_mapas/7desarrollo_social/Producción de Café.pdf'
        }
      ]
    }
  ];

  const handleThemeChange = (e) => {
    const themeId = e.target.value;
    setSelectedTheme(themeId);
    setSelectedMap('');
    setPdfUrl('');
    setError(null);
  };

  const handleMapChange = (e) => {
    setSelectedMap(e.target.value);
    setError(null);
  };

  const handleViewMap = () => {
    if (!selectedMap) return;
    
    setIsLoading(true);
    setError(null);
    
    // Simulamos una carga con timeout para demostrar el estado de carga
    setTimeout(() => {
      try {
        const selectedMapData = mapCategories
          .find(cat => cat.id === selectedTheme)?.maps
          .find(map => map.path === selectedMap);
        
        if (selectedMapData) {
          setPdfUrl(selectedMapData.path);
        } else {
          throw new Error('Mapa no encontrado');
        }
      } catch (err) {
        setError('Error al cargar el mapa. Por favor intente nuevamente.');
        console.error('Error loading map:', err);
      } finally {
        setIsLoading(false);
      }
    }, 800);
  };

  // Obtener la categoría seleccionada
  const selectedCategory = mapCategories.find(cat => cat.id === selectedTheme);

  return (
    <div className="map-selector-container">
        <div className="form-row">
          <div className="form-group col-md-5">
            <label htmlFor="themeSelect" className="form-label">
              Selecciona un Tema:
            </label>
            <select
              id="themeSelect"
              className="form-select"
              value={selectedTheme}
              onChange={handleThemeChange}
            >
              <option value="">-- Elige un Tema --</option>
              {mapCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group col-md-5">
            <label htmlFor="mapSelect" className="form-label">
              Selecciona un Mapa:
            </label>
            <select
              id="mapSelect"
              className="form-select"
              disabled={!selectedTheme}
              value={selectedMap}
              onChange={handleMapChange}
            >
              <option value="">-- Selecciona un mapa --</option>
              {selectedCategory?.maps.map(map => (
                <option key={map.id} value={map.path}>
                  {map.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group col-md-2 d-flex align-items-end">
            <button
              id="viewMap"
              className="btn btn-primary w-100"
              disabled={!selectedMap || isLoading}
              onClick={handleViewMap}
            >
              {isLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className="visually-hidden">Cargando...</span>
                </>
              ) : (
                'Ver Mapa'
              )}
            </button>
          </div>
      </div>

      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}

      <div className="pdf-viewer-container mt-4">
        {pdfUrl ? (
          <iframe
            id="pdfViewer"
            src={pdfUrl}
            className="pdf-iframe"
            title="Visualizador de PDF"
            allowFullScreen
          />
        ) : (
          <div className="pdf-placeholder">
            <div className="placeholder-content">
              <i className="bi bi-map-fill placeholder-icon"></i>
              <p className="placeholder-text">
                {selectedMap 
                  ? 'Previsualización del mapa aparecerá aquí' 
                  : 'Selecciona un tema y un mapa para visualizarlo'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapSelector;