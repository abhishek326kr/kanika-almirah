import React from 'react';
import './banner2.css';

const Banner2 = ({ imageUrl }) => {
  return (
    <div className="banner-container">
      <img src={imageUrl} alt="Banner" style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default Banner2;

