import React from 'react';

const ProductCard = ({ title, description, icon }) => {
  return (
    <div className="product-card">
      <div className="row g-0">
        <div className="col-9">
          <div className="card-content">
            <div className="row g-0">
              <div className="col-2">
                <img src={icon} alt={title} className="product-icon" />
              </div>
              <div className="col-9">
                <h6 className="product-title">{title}</h6>
                <p className="product-description">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;