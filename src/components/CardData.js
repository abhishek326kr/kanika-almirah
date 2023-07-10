import React from 'react';
import Card from './Card'
import almirah from "./Images/almirah .jpg";
import almirah19 from "./Images/almirah 1.2.jpg";
import almirah25 from "./Images/almirah 1.3.jpg";
import almirah26 from "./Images/almirah 1.4.jpg";
import almirah27 from "./Images/almirah 2.2.jpg";
import almirah28 from "./Images/almirah 2.3.jpg";
import almirah29 from "./Images/almirah 2.4.jpg";
import almirah18 from "./Images/almirah 2.jpg";
import almirah15 from "./Images/almirah 4.2.jpg";
import almirah10 from "./Images/almirah 5.2.jpg";

const CardData = ({ rowLimit }) => {
  const products = [
    {
      id: 1,
      image: almirah,
      title: "Classic Almirah",
      price: "Rs. 32000",
      description: "Best in class"
    },
    {
      id: 2,
      image: almirah19,
      title: "Best Almirah",
      price: "Rs. 15000",
      description: "Best in class"
    },
    {
      id: 3,
      image: almirah18,
      title: "Wow Almirah",
      price: "Rs. 10000",
      description: "Best in class"
    },
    {
      id: 4,
      image: almirah15,
      title: "Brown Almirah",
      price: "Rs. 25000",
      description: "Best in class"
    },
    {
      id: 5,
      image: almirah10,
      title: "Mast hai",
      price: "Rs. 20000",
      description: "Description for"
    },
    {
      id: 6,
      image: almirah25,
      title: "Classic Almirah",
      price: "Rs. 32000",
      description: "Best in class"
    },
    {
      id: 7,
      image: almirah26,
      title: "Best Almirah",
      price: "Rs. 15000",
      description: "Best in class"
    },
    {
      id: 8,
      image: almirah27,
      title: "Wow Almirah",
      price: "Rs. 10000",
      description: "Best in class"
    },
    {
      id: 9,
      image: almirah28,
      title: "Brown Almirah",
      price: "Rs. 25000",
      description: "Best in class"
    },
    {
      id: 10,
      image: almirah29,
      title: "Mast hai",
      price: "Rs. 20000",
      description: "Description for"
    }
  ];

  const displayProducts = rowLimit ? products.slice(0, rowLimit) : products;

  return (
    <div className='title'>
      <div className="carddiv">
      {displayProducts.map((product) => (
          <div className="card" key={product.id}>
            <Card
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
            <button className="buy-button">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardData;
