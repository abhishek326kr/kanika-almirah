import React from 'react';
import "./Card.css"


const Card = ({ image, title, price, description }) => {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Price: {price}</p>
      <p>{description}</p>
    </div>
  );
};

export default Card;
