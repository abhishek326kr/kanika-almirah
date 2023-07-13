import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home.js';
import Footer from './components/Footer';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Admin from './pages/Admin';
import ProductView from './components/ProductView';
// import Admin from './pages/Admin';
import './App.css'

const App = () => {
  return (
    <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-details" element={<ProductView />} /> 
          <Route path="/admin" element={<Admin />} /> 
        </Routes>
        <Footer />
    </Router>
    
  );
};

export default App;
