import './style.css'

const InfoCard = ({ imageSrc, link, altText, target = "_self" }) => {
  return (
    <div className="card mb-3 original-info-card" style={{ 
      borderBottomLeftRadius: '0px', 
      borderBottomRightRadius: '0px',
      border: '1px solid rgba(0,0,0,.125)',
      overflow: 'hidden'
    }}>
      <a 
        href={link} 
        target={target} 
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="original-card-link"
      >
        <img 
          className="card-img-top vertigo-effect original-card-image" 
          src={imageSrc} 
          alt={altText}
          style={{ width: '100%', height: 'auto' }}
        />
      </a>
    </div>
  );
};

export default InfoCard;