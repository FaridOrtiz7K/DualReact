import React from 'react';

const MapLink = ({ path, name, onMapClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onMapClick(path);
  };

  return (
    <a 
      href={path} 
      className="list-group-item list-group-item-action original-map-link" 
      onClick={handleClick}
    >
      {name}
    </a>
  );
};

export default MapLink;