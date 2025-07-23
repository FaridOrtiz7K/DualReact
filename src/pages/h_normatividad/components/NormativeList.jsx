import React from 'react';
import styles from '../components/NormativeList.module.css';

const NormativeList = ({ items }) => {
  return (
    <div className={styles.normativeContainer}>
      {items.map((item, index) => (
        <div key={index} className={styles.normativeItem}>
          <a 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.normativeLink}
          >
            {item.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default NormativeList;