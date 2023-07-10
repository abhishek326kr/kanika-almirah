import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import { Link } from 'react-router-dom';

import Video from "./video";

// Imagges URL
import banner1 from "./Images/banner 1.jpg";
import banner2 from "./Images/banner 2.jpg";
import banner3 from "./Images/banner 3.jpg";
import almirah19 from "./Images/almirah .jpg"
import almirah22 from "./Images/almirah 5.2.jpg"
import almirah25 from "./Images/almirah 4.2.jpg"
import category1 from "./Images/feature-1.jpg"
import category2 from "./Images/feature-2.jpg"
import category3 from "./Images/feature-3.jpg"
import CardData from "./CardData";
import Banner from "./banner";
import Banner2 from "./banner2";
import banner32 from './Images/banner32.jpg'



const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="homecontainer">
        <Slider {...settings}>
          <div>
            <img src={banner1} alt="Slide 2" />
          </div>
          <div>
            <img src={banner2} alt="Slide 3" />
          </div>
          <div>
            <img src={banner3} alt="Slide 4" />
          </div>
        </Slider>
      </div>

      <div className="home-container">
        <div className="home">
          <div className="homecontent">
            <h1 className="heading">Welcome to Homes Kanika Almirah</h1>
            <p className="p2">We’re World's Leading Industry Corporation</p>
            <p className="p3">
              We specialize in manufacturing high-quality almirahs for all your
              storage needs. Our products are designed to be durable, stylish,
              and functional, providing you with the perfect solution for
              organizing your belongings.
            </p>
            <p>
              Explore our range of almirahs and find the one that suits your
              requirements. Feel free to reach out to us if you have any
              questions or if you'd like to place an order.
            </p>
            <button className="cta-button">Contact Us</button>
          </div>
        </div>
        <div className="slidersq">
          <Slider {...settings}>
            <div>
              <img className="card-img-top" src={almirah19} alt="Slide 1" />
            </div>
            <div>
              <img className="card-img-top" src={almirah22} alt="Slide 2" />
            </div>
            <div>
              <img className="card-img-top" src={almirah25} alt="Slide 3" />
            </div>
          </Slider>
        </div>
      </div>

      <div>
        <Banner />
      </div>

      <div className="category-margin">
      <section>
        <h2 className="producttitle">OUR CATEGORY</h2>
        <div className="category">
          <div className="category-item">
            <img src={category3} alt="Awesome Image 1" />
            <h3>Digital Printed Almirahs</h3>
            <p>This elegant cupboard is a combination of comfort and utility without losing out on the aesthetic flavor.</p>
            <a href="/digital-printed-almirahs">View All</a>
          </div>
          <div className="category-item">
            <img src={category1} alt="Awesome Image 2" />
            <h3>Dressing Almirahs</h3>
            <p>With our dressing series we aspire to not only bring alive your spaces, but to inspire a change in the way you live.</p>
            <a href="/dressing-almirahs">View All</a>
          </div>
          <div className="category-item">
            <img src={category2} alt="Awesome Image 2" />
            <h3>Modern wardrobes</h3>
            <p>Introducing the steel wardrobe created with unique functionality that suits your lifestyle.</p>
            <a href="/dressing-almirahs">View All</a>
          </div>
          <div className="category-item">
            <img src={category3} alt="Awesome Image 2" />
            <h3>Modern wardrobes</h3>
            <p>Introducing the steel wardrobe created with unique functionality that suits your lifestyle.</p>
            <a href="/dressing-almirahs">View All</a>
          </div>
          <div className="category-item">
            <img src={category3} alt="Awesome Image 2" />
            <h3>Modern wardrobes</h3>
            <p>Introducing the steel wardrobe created with unique functionality that suits your lifestyle.</p>
            <a href="/dressing-almirahs">View All</a>
          </div>
          <div className="category-item">
            <img src={category3} alt="Awesome Image 2" />
            <h3>Modern wardrobes</h3>
            <p>Introducing the steel wardrobe created with unique functionality that suits your lifestyle.</p>
            <a href="/dressing-almirahs">View All</a>
          </div>
          {/* Add more category items */}
        </div>
      </section>
    </div>

    <div>
      <Video />
    </div>

      
    <div>
    <section>
    <h1 className="producttitle">Our Almirah Products</h1>
      {/* Other components or content */}
      <CardData displayRow={true} rowLimit={5} />
      <div className="parent-container">
      <Link to="/products" className="view-all-button">
          View All
        </Link>
      </div>
      </section>
      <div>
        <Banner2 imageUrl={banner32} />
      </div>
    </div>
  

    </>
  );
};

export default Home;
