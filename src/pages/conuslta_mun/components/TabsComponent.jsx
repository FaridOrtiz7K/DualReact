import React, { useState } from 'react';

const TabsComponent = ({ tabs, activeTab, onTabChange }) => {
  const [accessGranted, setAccessGranted] = useState({});

  const handleTabClick = (tabId, isProtected, password) => {
    if (isProtected && !accessGranted[tabId]) {
      const userInput = prompt(`Ingrese la contraseña para acceder a ${tabId.toUpperCase()}:`);
      if (userInput === password) {
        setAccessGranted({ ...accessGranted, [tabId]: true });
        onTabChange(tabId);
      } else {
        alert("Contraseña incorrecta. Acceso denegado.");
      }
    } else {
      onTabChange(tabId);
    }
  };

  return (
    <div className="tabs-container">
      <ul className="tabs-list">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id, tab.protected, tab.password)}
              style={{ fontSize: '20px' }}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      
      <div className="tab-content">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabsComponent;