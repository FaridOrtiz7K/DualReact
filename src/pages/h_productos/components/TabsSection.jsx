import React from 'react';

const TabsSection = ({ title, description, icon }) => {
    return (
    <div className="service-card bg-white">
      <div className="row g-0">
        <div className="col-md-2 d-flex align-items-center justify-content-center">
          <img 
            src={icon} 
            alt={title} 
            className="service-icon img-fluid p-2"
            style={{ maxWidth: '80px', height: 'auto' }}
          />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="service-title card-title text-dark mb-3">{title}</h5>
            <p className="service-description card-text text-secondary">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsSection;