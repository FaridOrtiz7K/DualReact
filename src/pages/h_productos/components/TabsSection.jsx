import React, { useState } from 'react';
import ProductCard from './ProductCard';

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('carto');

  const tabData = [
    {
      id: 'carto',
      title: 'Cartografía temática',
      products: [
        {
          title: 'Cartografía física y digital',
          description: 'Mapas personalizados de alta calidad en formato físico o digital',
          icon: '/images/logos/map_hidalgo.png'
        },
        {
          title: 'Cartografía web interactiva',
          description: 'Visores geográficos interactivos que pueden ser consultados por la ciudadanía desde cualquier lugar',
          icon: '/images/logos/map_web.png'
        },
        // ... otros productos
      ]
    },
    // ... otras pestañas
  ];

  const activeTabData = tabData.find(tab => tab.id === activeTab);

  return (
    <>
      <h2>¿Qué hacemos?</h2><br />
      
      <div className="tabs-container">
        {tabData.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTabData.products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default TabsSection;