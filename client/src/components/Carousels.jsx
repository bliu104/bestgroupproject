import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";

class Carousels extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      images: [
        'https://images-na.ssl-images-amazon.com/images/I/71o3VutEycL._SX679_.jpg',
        'https://i.etsystatic.com/7965790/r/il/7f35c9/1591964160/il_1588xN.1591964160_9eaj.jpg',
        'https://i.etsystatic.com/7965790/r/il/bb42ee/1590944534/il_1588xN.1590944534_jupi.jpg',
        'https://i.etsystatic.com/7965790/r/il/f89a44/1590976168/il_1588xN.1590976168_2tua.jpg'
      ]
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  prevSlide() {
    const lastIndex = this.state.images.length - 1;
    const resetIndex = this.state.currentIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentIndex - 1;

    this.setState({
      currentIndex: index
    });
  }

  nextSlide() {
    const lastIndex = this.state.images.length - 1;
    const resetIndex = this.state.currentIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentIndex + 1;

    this.setState({
      currentIndex: index
    });
  }

  render() {
    const { currentIndex, images } = this.state;
    let rotation = images.slice(currentIndex, currentIndex + 4);
    if (rotation.length < 4) {
      rotation = rotation.concat(images.slice(0, 4 - rotation.length));
    }

    return (
      <div className='carousel-container'>
        <div className='arrow-container' onClick={this.prevSlide}>
          <img src='https://i.imgur.com/PQVDPFp.png?1' className='arrow-image' />
        </div>
        <div className="track">
          {rotation.map((image, index) => (
            <div className={`carousel-image-container${index}`}>
              <img key={index} src={image} alt="Products" className={`carousel${index}`} />
            </div>
          ))}
        </div>
        <div className='arrow-container' onClick={this.nextSlide}>
          <img src='https://i.imgur.com/XXEyxGW.png?7' className='arrow-image'/>
        </div>
      </div>
    );
  }
}

export default Carousels;
