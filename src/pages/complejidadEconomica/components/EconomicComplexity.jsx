import { useState, useEffect } from 'react';
import { BarChart, PieChart, LineChart } from './ChartComponents'; // Componentes personalizados de gráficos
import { Table, Dropdown, Spinner } from './UIComponents'; // Componentes de UI reutilizables
import { fetchEconomicData } from '../services/api'; // Servicio para obtener datos
import './EconomicComplexity.css';

const EconomicComplexity = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRange, setTimeRange] = useState('5y');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [activeView, setActiveView] = useState('general');

  // Datos de ejemplo para cuando la API no esté disponible
  const sampleData = {
    general: {
      complexityIndex: 1.15,
      worldRank: 42,
      trend: 'up',
      comparison: {
        regionalAverage: 0.92,
        globalAverage: 1.05
      }
    },
    historical: {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
      values: [0.98, 1.02, 0.95, 1.08, 1.12, 1.15]
    },
    sectors: [
      { name: 'Manufacturas avanzadas', value: 0.45, color: '#3498db' },
      { name: 'Tecnología', value: 0.25, color: '#2ecc71' },
      { name: 'Agricultura', value: 0.15, color: '#f1c40f' },
      { name: 'Extracción', value: 0.10, color: '#e74c3c' },
      { name: 'Otros', value: 0.05, color: '#9b59b6' }
    ],
    countries: [
      { name: 'Alemania', complexity: 1.45, trend: 'up' },
      { name: 'Japón', complexity: 1.38, trend: 'stable' },
      { name: 'Estados Unidos', complexity: 1.32, trend: 'up' },
      { name: 'Corea del Sur', complexity: 1.28, trend: 'up' },
      { name: 'México', complexity: 1.15, trend: 'up' },
      { name: 'Brasil', complexity: 0.85, trend: 'stable' },
      { name: 'India', complexity: 0.78, trend: 'up' }
    ]
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        // const result = await fetchEconomicData(timeRange);
        // setData(result);
        
        // Usando datos de ejemplo por ahora
        setData(sampleData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        setData(sampleData); // Usar datos de ejemplo en caso de error
      }
    };

    loadData();
  }, [timeRange]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setActiveView('country');
  };

  const renderGeneralView = () => (
    <div className="general-view">
      <div className="kpi-cards">
        <div className="kpi-card">
          <h3>Índice de Complejidad</h3>
          <div className="kpi-value">{data?.general.complexityIndex}</div>
          <div className={`kpi-trend ${data?.general.trend}`}>
            {data?.general.trend === 'up' ? '↑' : data?.general.trend === 'down' ? '↓' : '→'}
          </div>
        </div>
        
        <div className="kpi-card">
          <h3>Ranking Mundial</h3>
          <div className="kpi-value">#{data?.general.worldRank}</div>
          <div className="kpi-comparison">de 150 países</div>
        </div>
        
        <div className="kpi-card">
          <h3>Comparativa Regional</h3>
          <div className="kpi-value">{data?.general.complexityIndex - data?.general.regionalAverage > 0 ? '+' : ''}
            {(data?.general.complexityIndex - data?.general.regionalAverage).toFixed(2)}
          </div>
          <div className="kpi-comparison">vs promedio regional</div>
        </div>
      </div>

      <div className="chart-row">
        <div className="chart-container">
          <h3>Evolución Histórica</h3>
          <LineChart 
            data={data?.historical.values} 
            labels={data?.historical.labels} 
            color="#3498db"
          />
        </div>
        
        <div className="chart-container">
          <h3>Composición por Sectores</h3>
          <PieChart 
            data={data?.sectors.map(s => s.value)} 
            labels={data?.sectors.map(s => s.name)}
            colors={data?.sectors.map(s => s.color)}
          />
        </div>
      </div>

      <div className="comparison-table">
        <h3>Comparativa con Otros Países</h3>
        <Table 
          columns={[
            { header: 'País', accessor: 'name' },
            { header: 'Índice', accessor: 'complexity' },
            { header: 'Tendencia', accessor: 'trend', 
              render: (value) => (
                <span className={`trend-indicator ${value}`}>
                  {value === 'up' ? '↑' : value === 'down' ? '↓' : '→'}
                </span>
              )
            },
            { header: 'Acciones', 
              render: (_, row) => (
                <button 
                  className="action-button"
                  onClick={() => handleCountrySelect(row)}
                >
                  Detalles
                </button>
              )
            }
          ]}
          data={data?.countries}
        />
      </div>
    </div>
  );

  const renderCountryView = () => (
    <div className="country-view">
      <button className="back-button" onClick={() => setActiveView('general')}>
        ← Volver al panorama general
      </button>
      
      <h2>Análisis de Complejidad Económica: {selectedCountry?.name}</h2>
      
      <div className="country-details">
        <div className="country-kpi">
          <h3>Índice de Complejidad</h3>
          <div className="value">{selectedCountry?.complexity}</div>
          <div className={`trend ${selectedCountry?.trend}`}>
            Tendencia: {selectedCountry?.trend === 'up' ? 'Al alza' : 
                       selectedCountry?.trend === 'down' ? 'A la baja' : 'Estable'}
          </div>
        </div>
        
        <div className="country-charts">
          <div className="chart-container">
            <h3>Evolución Reciente</h3>
            <LineChart 
              data={[0.9, 1.0, 1.1, selectedCountry.complexity]} 
              labels={['2019', '2020', '2021', '2022']}
              color="#e74c3c"
            />
          </div>
          
          <div className="chart-container">
            <h3>Principales Exportaciones</h3>
            <BarChart 
              data={[0.25, 0.18, 0.15, 0.12, 0.10]} 
              labels={['Automóviles', 'Electrónica', 'Petróleo', 'Agricultura', 'Otros']}
              colors={['#3498db', '#2ecc71', '#f1c40f', '#e74c3c', '#9b59b6']}
            />
          </div>
        </div>
        
        <div className="country-analysis">
          <h3>Análisis Competitivo</h3>
          <p>
            {selectedCountry.name} muestra un índice de complejidad económica 
            {selectedCountry.complexity > 1.2 ? ' alto' : 
             selectedCountry.complexity > 0.9 ? ' moderado' : ' bajo'}, 
            indicando una estructura productiva 
            {selectedCountry.complexity > 1.2 ? ' diversificada y sofisticada' : 
             ' con potencial de desarrollo en sectores de mayor valor agregado'}.
          </p>
          <p>
            La tendencia {selectedCountry.trend === 'up' ? 'positiva' : 
                        selectedCountry.trend === 'down' ? 'negativa' : 'estable'} 
            en los últimos años sugiere que el país está 
            {selectedCountry.trend === 'up' ? ' mejorando su capacidad productiva' : 
             selectedCountry.trend === 'down' ? ' perdiendo competitividad' : 
             ' manteniendo su posición competitiva'} en el contexto global.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="economic-complexity">
      <div className="header-controls">
        <h1>Complejidad Económica Global</h1>
        
        <div className="controls">
          <Dropdown 
            options={[
              { value: '1y', label: 'Último año' },
              { value: '5y', label: '5 años' },
              { value: '10y', label: '10 años' }
            ]}
            selectedValue={timeRange}
            onChange={(value) => setTimeRange(value)}
          />
          
          <div className="view-switcher">
            <button 
              className={activeView === 'general' ? 'active' : ''}
              onClick={() => setActiveView('general')}
            >
              Vista General
            </button>
            {selectedCountry && (
              <button 
                className={activeView === 'country' ? 'active' : ''}
                onClick={() => setActiveView('country')}
              >
                Vista País
              </button>
            )}
          </div>
        </div>
      </div>

      {error && (
        <div className="error-message">
          <p>Error al cargar datos: {error}</p>
          <p>Mostrando datos de ejemplo</p>
        </div>
      )}

      {loading ? (
        <div className="loading-container">
          <Spinner />
          <p>Cargando datos de complejidad económica...</p>
        </div>
      ) : (
        <div className="content">
          {activeView === 'general' ? renderGeneralView() : renderCountryView()}
        </div>
      )}
    </div>
  );
};

export default EconomicComplexity;