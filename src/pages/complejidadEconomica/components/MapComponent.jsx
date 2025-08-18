import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, LayersControl, ScaleControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './components/style.css'

// Configuración de iconos (fix para Webpack/Vite)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Capa GeoJSON de ejemplo (reemplazar con tus datos reales)
const sampleGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Zona Económica 1",
        complexity: "Alta",
        color: "#2ecc71"
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-99.18, 19.42], [-99.17, 19.41], [-99.16, 19.42],
          [-99.16, 19.43], [-99.17, 19.44], [-99.18, 19.43], [-99.18, 19.42]
        ]]
      }
    }
  ]
};

// Estilo para las capas GeoJSON
const geoJsonStyle = (feature) => {
  return {
    fillColor: feature?.properties?.color || "#3498db",
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7
  };
};

// Componente para resetear la vista del mapa
const ResetView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const MapComponent = ({ economicData, onCountrySelect }) => {
  const [mapReady, setMapReady] = useState(false);
  const [bounds, setBounds] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const mapRef = useRef();
  const geoJsonLayerRef = useRef();

  // Datos de países de ejemplo (reemplazar con tus datos reales)
  const countriesData = economicData || [
    { name: "México", lat: 23.6345, lng: -102.5528, complexity: 0.92, exports: ["Automóviles", "Electrónica"] },
    { name: "Brasil", lat: -14.2350, lng: -51.9253, complexity: 0.85, exports: ["Soja", "Mineral de hierro"] },
    { name: "Chile", lat: -35.6751, lng: -71.5430, complexity: 1.05, exports: ["Cobre", "Frutas"] },
  ];

  // Efecto para inicializar el mapa
  useEffect(() => {
    if (mapRef.current && countriesData.length > 0) {
      const markers = countriesData.map(country => [country.lat, country.lng]);
      const newBounds = L.latLngBounds(markers);
      setBounds(newBounds);
      setMapReady(true);
    }
  }, [countriesData]);

  // Evento al hacer clic en un país
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    if (onCountrySelect) {
      onCountrySelect(country);
    }
  };

  // Evento al hacer clic en una característica GeoJSON
  const onEachFeature = (feature, layer) => {
    layer.on({
      click: () => {
        setSelectedCountry({
          name: feature.properties.name,
          complexity: feature.properties.complexity,
          customFeature: true
        });
      }
    });
  };

  return (
    <div className="map-wrapper">
      <div className="map-controls">
        <button 
          onClick={() => mapRef.current?.fitBounds(bounds)}
          disabled={!mapReady}
        >
          Ajustar vista
        </button>
        
        {selectedCountry && (
          <div className="country-info">
            <h3>{selectedCountry.name}</h3>
            <p>Complejidad Económica: {selectedCountry.complexity}</p>
            {selectedCountry.exports && (
              <div>
                <p>Principales exportaciones:</p>
                <ul>
                  {selectedCountry.exports.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      <MapContainer
        center={[19.4326, -99.1332]}
        zoom={5}
        style={{ height: '600px', width: '100%' }}
        whenCreated={(map) => {
          mapRef.current = map;
          map.on('click', () => setSelectedCountry(null));
        }}
      >
        <ResetView center={[19.4326, -99.1332]} zoom={5} />
        <ScaleControl position="bottomleft" />
        
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </LayersControl.BaseLayer>
          
          <LayersControl.BaseLayer name="Satélite">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            />
          </LayersControl.BaseLayer>
          
          <LayersControl.Overlay name="Países" checked>
            {countriesData.map((country, index) => (
              <Marker
                key={index}
                position={[country.lat, country.lng]}
                eventHandlers={{
                  click: () => handleCountryClick(country),
                }}
              >
                <Popup>
                  <div>
                    <h3>{country.name}</h3>
                    <p>Índice de complejidad: {country.complexity}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </LayersControl.Overlay>
          
          <LayersControl.Overlay name="Zonas económicas">
            <GeoJSON
              data={sampleGeoJson}
              style={geoJsonStyle}
              onEachFeature={onEachFeature}
              ref={geoJsonLayerRef}
            />
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default MapComponent;