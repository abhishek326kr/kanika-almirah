import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardData = ({ rowLimit }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://localhost:5000/api/formdata')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const displayProducts = rowLimit ? products.slice(0, rowLimit) : products;

  return (
    <div className="title">
      <div className="carddiv">
        {displayProducts.map(product => (
          <div className="card" key={product._id}>
            <Card
              image={product.productImage}
              title={product.productTitle}
              price={product.productPrice}
              description={product.productDescription}
            />
            <button className="buy-button">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardData;
