import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// Fix para los iconos de Leaflet con React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const App = () => {
  const [date] = useState("2024-07-01");
  const [mapData, setMapData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('map');

  // Simulación de carga de datos (reemplazar con tu API real)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Aquí iría tu llamada a la API real
        // const response = await fetch('/api/economic-data');
        // const data = await response.json();
        
        // Datos de ejemplo
        const mockData = {
          countries: [
            { name: "México", lat: 23.6345, lng: -102.5528, complexity: 0.92 },
            { name: "Brasil", lat: -14.2350, lng: -51.9253, complexity: 0.85 },
            { name: "Chile", lat: -35.6751, lng: -71.5430, complexity: 1.05 },
          ],
          indicators: {
            economicComplexityIndex: 1.2,
            growthRate: 3.5,
            mainExports: ["Manufacturas", "Productos agrícolas", "Minerales"]
          }
        };
        
        setMapData(mockData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderMap = () => (
    <div className="map-container">
      <MapContainer 
        center={[19.4326, -99.1332]} 
        zoom={4} 
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {mapData?.countries.map((country, index) => (
          <Marker key={index} position={[country.lat, country.lng]}>
            <Popup>
              <div>
                <h3>{country.name}</h3>
                <p>Índice de complejidad: {country.complexity}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );

  const renderEconomicData = () => (
    <div className="economic-data">
      {isLoading ? (
        <div className="loading">Cargando datos...</div>
      ) : (
        <>
          <h2>Indicadores Clave</h2>
          <div className="indicators-grid">
            <div className="indicator-card">
              <h3>Índice de Complejidad Económica</h3>
              <p className="value">{mapData?.indicators.economicComplexityIndex}</p>
            </div>
            <div className="indicator-card">
              <h3>Tasa de Crecimiento</h3>
              <p className="value">{mapData?.indicators.growthRate}%</p>
            </div>
            <div className="indicator-card">
              <h3>Principales Exportaciones</h3>
              <ul>
                {mapData?.indicators.mainExports.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="app">
      <header>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Complejidad Económica</title>
      </header>

      <main>
        <h1>Análisis de Complejidad Económica</h1>
        <p className="last-update">Última actualización: {date}</p>
        
        <div className="tabs">
          <button 
            className={activeTab === 'map' ? 'active' : ''}
            onClick={() => setActiveTab('map')}
          >
            Mapa Interactivo
          </button>
          <button 
            className={activeTab === 'data' ? 'active' : ''}
            onClick={() => setActiveTab('data')}
          >
            Datos Económicos
          </button>
        </div>
        
        <div className="content">
          {activeTab === 'map' ? renderMap() : renderEconomicData()}
        </div>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Complejidad Económica - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default App;