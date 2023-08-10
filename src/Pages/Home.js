import React from 'react';
import { Fragment } from 'react';

// import NavBar from '../components/my-header/NavBar';
import Header from '../components/my-header/Header';
// import HSlider from '../components/he-slider/HSlider';
import PopularMenu from '../components/my-body/popular-menu/PopularMenu';
// import ProductCard from '../components/product-card/ProductCard';
import ChooseUs from '../components/my-body/choose-us/ChooseUs';
import Footer from '../components/my-footer/Footer';
import LandingPage from '../components/my-body/land/land';
// import ProductCard from '../components/product-card/ProductCard';
// import './home.css'

const Home = () => {
  return (
    <Fragment>
      <Header/>
      {/* <NavBar/> */}
      {/* <HSlider/> */}
      <LandingPage/>
      <PopularMenu/>
      {/* <ProductCard/> */}
      <ChooseUs/>
      <Footer/>
   </Fragment>
  );
}

export default Home