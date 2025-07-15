const MapLink = ({ path, name }) => {
  const openPopup = (e) => {
    e.preventDefault();
    const width = 800;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    
    window.open(path, '_blank', 
      `width=${width},height=${height},left=${left},top=${top}`
    );
  };

  return (
    <a 
      href={path} 
      className="list-group-item list-group-item-action" 
      onClick={openPopup}
    >
      {name}
    </a>
  );
};

export default MapLink;