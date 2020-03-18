import React, { Component } from "react";

class CarouselDiscounts extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      images: [
        'https://www.pokemoncenter.com/wcsstore/PokemonCatalogAssetStore/images/catalog/products/P6089/701-05313/P6089_701-05313_01.jpg',
        'https://www.pokemoncenter.com/wcsstore/PokemonCatalogAssetStore/images/catalog/products/P4164/701-03015/P4164_701-03015_01.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/81VV-hvlA3L._AC_SY879_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71wu%2BHMAKBL._SX679_.jpg'
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
          <img src='https://i.imgur.com/XXEyxGW.png?7' className='arrow-image' />
        </div>
      </div>
    );
  }
}

export default CarouselDiscounts;