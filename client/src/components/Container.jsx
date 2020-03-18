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
    const { user, items, isLight, active } = this.state;

    const { handleMode, menuIconOnClick } = this;

    return (
      <>
        <Header user={user} active={active} menuIconOnClick={menuIconOnClick} />
        <button
          onClick={handleMode}
          id="toggleButton"
          style={{ margin: "1.2%" }}
        >
          {isLight ? "Dark" : "Light"} Mode{" "}
        </button>

        <main className="container-not-bootstrap">
          <Routes
            items={items}
            user={user}
            setUser={this.setUser}
            addItem={this.addItem}
            clearUser={this.clearUser}
            handleMode={handleMode}
            isLight={isLight}
          />
        </main>
      </>
    );
  }
}
