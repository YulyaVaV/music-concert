import './App.scss';

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from './components/Header/Header';
import Category from './components/Category/Category';
import About from './components/About/About';
import Singers from './components/Singers/Singers';
import Shedule from './components/Shedule/Shedule';
import Price from './components/Price/Price';
import Sponsors from './components/Sponsors/Sponsors';
import Testimonials from './components/Testimonials/Testimonials';
import Instagram from './components/Instagram/Instagram';
import Contact from './components/ContactUs/Contact';
import Footer from './components/Footer/Footer';

export const App = () => {
  useEffect(() => {
    AOS.init({
      disable: 'phone',
      duration: 2000,
      delay: 40,
    });
  });

  return (
    <div className="App">
      <Header />
      <Category />
      <About />
      <Singers />
      <Shedule />
      <Price />
      <Sponsors />
      <Testimonials />
      <Instagram />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
