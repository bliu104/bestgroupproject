import React, { Component } from "react";
import { getItems } from "../services/items";
import Routes from "../routes";
import Header from "../screens/Header";
import Footer from "../components/shared/Footer";
import { AZ, ZA, lowestFirst, highestFirst } from "./Sort";

import { verifyToken } from "../services/auth";

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
    let value = event.target.value;
    console.log(event.target);
    switch (this.state.value) {
      case "AZ":
        console.log(this.state.items);
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

  menuIconOnClick = () => {
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    });
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
        */}

        <Header user={user} active={active} menuIconOnClick={menuIconOnClick} />
        <button onClick={handleMode} id="toggleButton" style={{ margin: 15 }}>
          {isLight ? "Dark" : "Light"} Mode{" "}
        </button>

        <main className="container-not-bootstrap">
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
