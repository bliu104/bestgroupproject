import React from "react";
import Home from './Home'
import CarouselDiscounts from "../components/CarouselDiscount";

const Landing = props =>
  <div className="landing-container">
    <h1>Title</h1>
    <div className='carousel-divs'>
      <h2>Check Out These Items on Sale</h2>
      <CarouselDiscounts />
    </div>
    <Home />
  </div>;
export default Landing;
