import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";

class Carousels extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      images: [
        "https://www.pokemoncenter.com/wcsstore/PokemonCatalogAssetStore/images/catalog/products/P6089/701-05314/P6089_701-05314_01.jpg",
        "https://www.pokemoncenter.com/wcsstore/PokemonCatalogAssetStore/images/catalog/products/P6089/701-05314/P6089_701-05314_02.jpg",
        "https://www.pokemoncenter.com/wcsstore/PokemonCatalogAssetStore/images/catalog/products/P6089/701-05314/P6089_701-05314_04.jpg",
        "https://www.pokemoncenter.com/wcsstore/PokemonCatalogAssetStore/images/catalog/products/P6089/701-05314/P6089_701-05314_05.jpg"
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
    let rotation = images.slice(currentIndex, currentIndex + 3);
    if (rotation.length < 3) {
      rotation = rotation.concat(images.slice(0, 3 - rotation.length));
    }

    return (
      <div>
        <button onClick={this.nextSlide}>right</button>
        <div className="track">
          {rotation.map((image, index) => (
            <img key={index} src={image} alt="" style={{ width: 200 + "px" }} />
          ))}
        </div>
        <button onClick={this.prevSlide}>left</button>
      </div>
    );
  }
}

export default Carousels;
