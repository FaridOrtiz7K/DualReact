import React, { useState } from 'react';
import MapLink from './MapLink';

const AccordionSection = ({ id, collapseId, title, icon, items, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={id}>
        <button 
          className={`accordion-button ${!isOpen ? 'collapsed' : ''}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={collapseId}
        >
          <img src={icon} alt="Icono" className="icono-imagen" />
          {title}
        </button>
      </h2>
      <div 
        id={collapseId}
        className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
        aria-labelledby={id}
        data-bs-parent="#accordionExample"
      >
        <div className="list-group">
          {items.map((item, index) => (
            <MapLink key={index} path={item.path} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;