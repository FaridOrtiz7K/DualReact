import React, { useState } from 'react';
import TabsSection from './TabsSection';

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState('carto');

  const tabs = [
    { id: 'carto', label: 'Cartografía temática' },
    { id: 'esta', label: 'Información estadística' },
    { id: 'datos', label: 'Análisis de datos' },
    { id: 'asesoria', label: 'Asesorías y capacitación' }
  ];

  const servicesData = {
    carto: [
      {
        title: "Cartografía física y digital",
        description: "Mapas personalizados de alta calidad en formato físico o digital",
        icon: "/images/logos/map_hidalgo.png"
      },
      {
        title: "Cartografía web interactiva",
        description: "Visores geográficos interactivos que pueden ser consultados por la ciudadanía desde cualquier lugar",
        icon: "/images/logos/map_web.png"
      },
      {
        title: "Revisión de cumplimiento de la LSIEyGEH",
        description: "Asesoramiento sobre los requerimientos que debe tener la cartografía temática y web de acuerdo a la Ley del Sistema de Información Estadística y Geográfica del Estado de Hidalgo",
        icon: "/images/logos/ley.png"
      }
    ],
    esta: [
      {
        title: "Informes estadísticos personalizados",
        description: "Resumen estadístico detallado a diferentes niveles de segregación (Manzana, AGEB, Colonia, Localidad, Municipio, Estado, Nacional)",
        icon: "/images/logos/esta1.png"
      },
      {
        title: "Cuestionarios e interpretación de resultados",
        description: "Formulación de cuestionarios y de metodologías para la interpretación de resultados",
        icon: "/images/logos/cuestionario.png"
      },
      
    ],
    datos: [
      {
        title: "Estadística multivariada",
        description: "Técnicas estadísticas para la toma de decisiones: Análisis de Componentes principales, Análisis de conglomerados, Análisis discriminante",
        icon: "/images/logos/multi.png"
      },
      {
        title: "Desarrollo y validación de metodologías",
        description: "Planteamiento y validación de metodologías para la toma de decisiones fundamentadas en análisis cuantitativos y cualitativos",
        icon: "/images/logos/meto.png"
      },
    ],
    asesoria: [
      {
        title: "Asesoría en documentos de planeación",
        description: "Guía para la realización de Planes municipales de desarrollo, Atlas de riesgo, PMDU, OET, y generación de indicadores",
        icon: "/images/logos/capacitacion.png"
      },
      {
        title: "Talleres presenciales y en línea",
        description: "Capacitación sobre Sistemas de información geográfica, obtención de información y su estadística básica",
        icon: "/images/logos/capacitacion2.png"
      },
      
    ]
  };

  return (
    <div className="services-tabs">
      <ul className="tab-list">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              style={{ fontSize: '20px' }}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {servicesData[activeTab]?.map((service, index) => (
          <TabsSection 
            key={index} 
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesTabs;