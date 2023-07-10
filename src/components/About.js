import React from 'react';
import './about.css';
import wood4 from "./Images/wood3.webp";
import feature2 from './Images/banner 3.jpg';
import feature3 from './Images/feature-3.jpg';
import Banner2 from './banner2';

const About = () => {
  return (
    <>
      <div>
        <Banner2 imageUrl={feature2} />
      </div>

      <div className="home-container">
        <div className="home">
          <div className="homecontent">
            <h1 className="p2">
              Homes Kanika Almirah is a leading almirah manufacturing company
              based in Rohtak, Haryana
            </h1>
            <p className="p3">
              Our company was founded in 2023 with a vision to provide customers
              with premium almirahs that perfectly blend aesthetics and utility.
              We understand the importance of storage solutions in modern homes,
              and we strive to design almirahs that not only meet your storage
              needs but also elevate the overall ambiance of your living spaces.
              At Homes Kanika Almirah, we take pride in our attention to detail
              and meticulous craftsmanship
            </p>
            <p>
              We offer a wide range of almirahs to cater to diverse customer
              preferences. From traditional and classic designs to modern and
              contemporary styles, we have almirahs that suit every taste and
              interior decor. Our almirahs are designed to maximize storage
              space, provide easy access to your belongings, and withstand the
              test of time.
            </p>
            <button className="cta-button">Contact Us</button>
          </div>
        </div>
        <div className="feature3">
          <img src={feature3} alt="Slide 1" />
        </div>
      </div>

      <div className="vision-purpose-container">
        <div className="image-container">
          <img src={wood4} alt="Almirah Image" />
        </div>
        <div className="vision-purpose">
          <div className="vision">
            <h2>VISION</h2>
            <p>
            To be the most trustable, reliable, and customer-centric brand in the market, Homes Kanika Almirah envisions a future where every individual can experience the utmost satisfaction and delight in their storage solutions. We aim to redefine the standards of quality, craftsmanship, and innovation in the almirah industry, setting new benchmarks for customer trust and loyalty.
            </p>
          </div>
          <div className="purpose">
            <h2>PURPOSE</h2>
            <p>
            At Homes Kanika Almirah, our purpose is deeply rooted in our commitment to contribute to India's mission of promoting Make in India. We take immense pride in being a homegrown brand, dedicated to manufacturing world-class almirahs that showcase the finest craftsmanship and quality.
            Our purpose extends beyond manufacturing exceptional almirahs. We aim to provide our customers with products that not only meet their storage needs but also exceed their expectations in terms of design, durability, and functionality. We are committed to delivering world-class products that showcase the best of Indian craftsmanship and innovation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
