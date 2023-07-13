import React from 'react';
import './ProductView.css';
import Card from './Card';

const ProductView = ({ product }) => {
  return (
    <div className="product-view">
      <Card image={product.image} title={product.title} price={product.price} description={product.description} />
    </div>
  );
};

export default ProductView;
