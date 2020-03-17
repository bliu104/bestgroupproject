import React, { Component } from "react";
import Layout from "../components/shared/Layout";
import Filters from "./Filters";
import { getItems } from "../services/items";

import { AZ, ZA, lowestFirst, highestFirst } from "../components/Sort";

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      resetItems: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  renderButton = id => {
    const { user, history, match } = this.props;
    if (user) {
      return (
        <button onClick={() => history.push(`${match.url}/${id}`)}>
          See More
        </button>
      );
    } else {
      return null;
    }
  };

  async componentDidMount() {
    try {
      const allItems = await getItems();
      this.setState({
        items: allItems,
        resetItems: allItems
      });
    } catch (err) {
      console.error(err);
    }
  }

  handleChange(e) {
    let input = e.target.value; // a-z
    const { items } = this.state;
    switch (input) {
      case "AZ":
        this.setState({
          items: AZ(items)
        });
        break;
      case "ZA":
        this.setState({
          items: ZA(items)
        });
        break;
      case "lowestFirst":
        this.setState({
          items: lowestFirst(items)
        });
        break;
      case "highestFirst":
        this.setState({
          items: highestFirst(items)
        });
        break;
    }
  }
  handleSubmitSearch = event => {
    event.preventDefault();

    this.search(this.state.items, this.state.input);
  };

  handleChangeSearch = event => {
    this.setState({ input: event.target.value });
    console.log(this.state.input);
  };
  search = (items, input) => {
    let itemsArray = [];
    input = input.toLowerCase();

    items.map(item => {
      if (item.title.toLowerCase().includes(input)) {
        itemsArray.push(item);
      }
    });
    this.setState({ items: itemsArray });
  };

  reset = () => {
    this.setState({ items: this.state.resetItems });
  };

  render() {
    const {
      user,
      setUser,
      clearUser,
      addItem,
      toggleHiddenCondition,
      createFilterCondition,
      isHiddenCondition,
      createFilterColor,
      toggleHiddenColor,
      toggleHiddenPrice,
      createFilterPrice,
      toggleHiddenFilter,
      handleSubmit,
      handleChange,
      isHiddenColor,
      value,
      isHiddenPrice,
      changeColor,
      changeCondition,
      handleMode,
      isLight,
      contactUs
    } = this.props;
    const { items, itemsArr } = this.state;
    if (user || !user) {
      return (
        <Layout>
          <h4>Items</h4>
          <div>
            Search Bar
            <form onSubmit={this.handleSubmitSearch}>
              <input
                type="text"
                value={this.state.input}
                onChange={this.handleChangeSearch}
              />
            </form>
            <button onClick={this.reset}>reset</button>
          </div>
          <label htmlFor="sort">Sort:</label>

          <select id="sort" onChange={this.handleChange}>
            <option value="AZ">A-Z</option>
            <option value="ZA">Z-A</option>
            <option value="highestFirst">Price High to Low</option>
            <option value="lowestFirst">Price Low to High</option>
          </select>
          <div className="item-container">
            {items ? (
              items.map(item => {
                return (
                  <div className="item" key={item._id}>
                    <div className="sub-item-container">
                      <img src={item.image_url} className="item-image"></img>
                    </div>
                    <div className="sub-item-container2">
                      <h5>{item.title.slice(0, 30)}...</h5>
                      {this.renderButton(item._id)}
                    </div>
                  </div>
                );
              })
            ) : (
              <h3>No Items at this time. </h3>
            )}
          </div>
        </Layout>
      );
    } else {
      return (
        <div className="landing">
          <h2>Welcome to the Items App!</h2>
          <div className="main">
            {!items ? <h3>No Items at this time.</h3> : null}
            <div className="item-container">{itemsArr}</div>
          </div>
        </div>
      );
    }
  }
}
