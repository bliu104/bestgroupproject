import React, { Component } from "react";
import { getItems } from "../services/items";
import Routes from "../routes";
import Header from "../screens/Header";
import Footer from "../components/shared/Footer";
import { AZ, ZA, lowestFirst, highestFirst } from "./Sort";
import Carousels from "./Carousels";
import { verifyToken } from "../services/auth";

import {
  searchByColor,
  uniqueColor,
  uniqueCondition,
  searchByCondition,
  searchByPrice
} from "./Filter";

import { set } from "mongoose";
import { Route } from "react-router-dom";
import Items from "../screens/Items";

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      items: [],
      itemsReset: [],
      isLight: true,
      value: "",
      isHiddenColor: true,
      isHiddenCondition: true,
      isHiddenPrice: true,
      isHiddenFilter: false,
      active: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const user = await verifyToken();
    if (user) {
      try {
        const items = await getItems();
        this.setState({ items });
        this.setState({ itemsReset: items });
      } catch (error) {
        alert("error");
      }
    }
  }

  addItem = item => this.setState({ items: [...this.state.items, item] });

  setUser = user => this.setState({ user });

  clearUser = () => this.setState({ user: null });

  toggleHiddenColor = () => {
    this.setState({
      isHiddenColor: !this.state.isHiddenColor
    });
  };

  toggleHiddenCondition = () => {
    this.setState({
      isHiddenCondition: !this.state.isHiddenCondition
    });
  };
  toggleHiddenPrice = () => {
    this.setState({
      isHiddenPrice: !this.state.isHiddenPrice
    });
  };
  toggleHiddenFilter = () => {
    this.setState({
      isHiddenFilter: !this.state.isHiddenFilter
    });
  };

  handleMode = e => {
    let { isLight } = this.state;
    if (isLight) {
      this.setState({
        isLight: false
      });
      e.target.className = e.target.parentElement.parentElement.className =
        "dark";
    } else {
      this.setState({ isLight: true });
      e.target.className = e.target.parentElement.parentElement.className =
        "light";
    }
  };

  handleSubmit(event) {
    event.preventDefault();
    let input = "";
    let value = event.target.value 
    console.log(event.target)
    switch (this.state.value) {
      case "AZ":
        console.log(this.state.items)
        input = AZ(this.state.items);
        break;
      case "ZA":
        input = ZA(this.state.items);
        break;
      case "lowestFirst":
        input = lowestFirst(this.state.items);
        break;
      case "highestFirst":
        input = highestFirst(this.state.items);
        break;
    }
    this.setState({ value: input });
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  changeColor = event => {
    const buttonInput = event.target.textContent;
    switch (buttonInput) {
      default:
        const newArray = searchByColor(this.state.items, buttonInput);
        this.setState({ items: newArray });
        break;
      case "Reset":
        const items = this.state.itemsReset;
        this.setState({ items });
    }
  };

  changeCondition = event => {
    const buttonInput = event.target.textContent;
    switch (buttonInput) {
      default:
        const newArray = searchByCondition(this.state.items, buttonInput);
        this.setState({ items: newArray });
        break;
      case "Reset":
        const items = this.state.itemsReset;
        this.setState({ items });
    }
  };

  changePrice = event => {
    const buttonInput = parseInt(event.target.className);
    if (buttonInput <= 25) {
      const newArray = searchByPrice(this.state.items, buttonInput);
      this.setState({ items: newArray });
    } else if (buttonInput <= 50) {
      const newArray = searchByPrice(this.state.items, buttonInput);
      this.setState({ items: newArray });
    } else if (buttonInput <= 100) {
      const newArray = searchByPrice(this.state.items, buttonInput);
      this.setState({ items: newArray });
    } else if (buttonInput <= 200) {
      const newArray = searchByPrice(this.state.items, buttonInput);
      this.setState({ items: newArray });
    } else if (buttonInput <= 500) {
      const newArray = searchByPrice(this.state.items, buttonInput);
      this.setState({ items: this.state.itemsReset });
      this.setState({ items: newArray });
    }
  };

  createFilterPrice = () => {
    return (
      <>
        <button onClick={this.changePrice} className="25">
          less than 25
        </button>
        <button onClick={this.changePrice} className="50">
          less than 50
        </button>
        <button onClick={this.changePrice} className="100">
          less than 100
        </button>
        <button onClick={this.changePrice} className="200">
          less than 200
        </button>
        <button onClick={this.changePrice} className="500">
          less than 500
        </button>
      </>
    );
  };

  createFilterColor = () => {
    const { items } = this.state;
    return uniqueColor(items).map(color => {
      return <button onClick={this.changeColor}>{color}</button>;
      console.log("object");
    });
  };

  createFilterCondition = () => {
    const { items } = this.state;
    return uniqueCondition(items).map(condition => {
      return <button onClick={this.changeCondition}>{condition}</button>;
    });
  };

  menuIconOnClick = () => {
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    });
    console.log("working");
    console.log(this.state.active);
  };

  render() {
    const {
      user,
      items,
      isLight,
      isHiddenColor,
      isHiddenCondition,
      value,
      isHiddenPrice,
      active
    } = this.state;

    const {
      handleMode,
      toggleHiddenColor,
      createFilterColor,
      toggleHiddenCondition,
      createFilterPrice,
      toggleHiddenFilter,
      handleSubmit,
      handleChange,
      toggleHiddenPrice,
      changeColor,
      changeCondition,
      createFilterCondition,
      menuIconOnClick
    } = this;

    return (
      <>
        {/* <button onClick={this.toggleHiddenFilter}>Filter</button> */}
        {/* <button onClick={this.toggleHiddenFilter}>Filter</button>
        {!this.state.isHiddenFilter && (
          <>
            <button onClick={this.toggleHiddenColor}>Color</button>
            {!this.state.isHiddenColor && this.createFilterColor()}
            <button onClick={this.toggleHiddenCondition}>Condition</button>
            {!this.state.isHiddenCondition && this.createFilterCondition()}
            <button onClick={this.toggleHiddenPrice}>Price</button>
            {!this.state.isHiddenPrice && this.createFilterPrice()}
          </>
        )} */}
        {/* <button onClick={this.changeColor}>Reset</button> */}
        {/* <form onSubmit={this.handleSubmit}>
        </form> */}
        {/* <button onClick={handleMode} id="toggleButton">
        )}
        <button onClick={this.changeColor}>Reset</button>
        <form onSubmit={this.handleSubmit}>
          <label>
            Sort
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="AZ">A to Z</option>
              <option value="ZA">Z to A</option>
              <option value="highestFirst">High to Lowest</option>
              <option value="lowestFirst">Lowest to Highest</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Header user={user} />
        <button onClick={handleMode} id="toggleButton">
          {isLight ? "Dark" : "Light"} Mode
        </button> */}
        <Header user={user} active={active} menuIconOnClick={menuIconOnClick} />
        <main className="container-not-bootstrap">
          <div>Electrics</div>
          <Carousels />
          <div>Mews</div>
          <Carousels />
          <div>Stuff</div>
          <Carousels />
          <Routes
            items={items}
            user={user}
            setUser={this.setUser}
            addItem={this.addItem}
            clearUser={this.clearUser}
            toggleHiddenCondition={toggleHiddenCondition}
            isHiddenCondition={isHiddenCondition}
            createFilterCondition={createFilterCondition}
            createFilterColor={createFilterColor}
            toggleHiddenColor={toggleHiddenColor}
            toggleHiddenPrice={toggleHiddenPrice}
            createFilterPrice={createFilterPrice}
            toggleHiddenFilter={toggleHiddenFilter}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            isHiddenColor={isHiddenColor}
            value={value}
            isHiddenPrice={isHiddenPrice}
            changeColor={changeColor}
            changeCondition={changeCondition}
            handleMode={handleMode}
            isLight={isLight}
          />
          <Footer />
        </main>
      </>
    );
  }
}
