import React from 'react';
import './Footer.css'; // Import CSS for custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import FeedbackForm from './form';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
  <footer>

  <div className="footer">
    <div className="section1">
    <div className='container1'>
        {/* <div className='map'> */}
        <iframe
      className="map-iframe"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27968.240765562725!2d76.576828!3d28.808177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d83d29f3e1fa9%3A0x735cdbfa8d7c92d5!2sShiva%20City!5e0!3m2!1sen!2sin!4v1688543293283!5m2!1sen!2sin"
      width="100%"
      height="430"
      style={{ border: 0, padding: '20px' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
        {/* </div> */}

        <div className='feedback'>
          <h4>Send Your Queries</h4>
          <FeedbackForm  />
        </div>
      </div>
    </div>

    <div className="section2">
    <div className="container">
        <div className="column">
          <h3>About Us</h3>
          <p>Homes Kanika Almirah is a leading almirah</p>
          <p>manufacturing company based in Rohtak, Haryana.</p>
          <p>We specialize in creating high-quality and</p>
          <p>stylish almirahs that are designed to enhance the</p>
          <p>functionality and aesthetics of your living spaces.</p>
        </div>

        <div className="column">
          <h3>Contact Us</h3>
          <p>Homes Kanika Almirah</p>
          <p>Shiva City,</p>
          <p>Rohtak, Haryana 124001</p>
          <p><b>Phone:</b> 123-456-7890</p>
          <p><b>Email:</b> info@example.com</p>
        </div>

        <div className="links">
          <h3>Quick Links</h3>
          <NavLink to={Home}>Home</NavLink>
          <NavLink to={About}>About</NavLink>
          <NavLink to={Products}>Products</NavLink>
          <NavLink to={Contact}>Contact</NavLink>
        </div>

        <div className="social-media">
          <h3>Follow Us</h3>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </div>

<div className='section3'>
  <p className="copyright">
    © <b>Homes Kanika Almirah</b>. All Rights Reserved | Powered by Digi India Solutions
  </p>
</div>




  </div>
</footer>
  );
};

export default Footer;