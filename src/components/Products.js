import React from 'react';
import CardData from './CardData';
import './Products.css';
import Banner2 from './banner2';
import bannerimg from './Images/banner 2.jpg'

const Products = () => {
  return (
    <div>
      <section>
      <div>
        <Banner2 imageUrl={bannerimg} />
      </div>

        <h1 className="producttitle">Our Wide Range of Products</h1>
        {/* Other components or content */}
        <CardData displayRow={true} rowLimit={10} />
      </section>
    </div>
  );
};

export default Products;
