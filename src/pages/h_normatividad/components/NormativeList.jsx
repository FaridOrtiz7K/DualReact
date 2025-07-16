import React from 'react';

const NormativeList = ({ items }) => {
  return (
    <ul className="list-group list-group-flush">
      {items.map((item, index) => (
        <li key={index} className="list-group-item">
          <a 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="normative-link"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NormativeList;