import React, { Component } from "react";
import Layout from "../components/shared/Layout";
import { getItems } from "../services/items";

import { AZ, ZA, lowestFirst, highestFirst } from "../components/Sort";

import {
  searchByColor,
  uniqueColor,
  uniqueCondition,
  searchByCondition,
  searchByPrice
} from "../components/Filter";

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      resetItems: [],
      isHiddenColor: true,
      isHiddenCondition: true,
      isHiddenPrice: true,
      isHiddenFilter: true
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
  //-------------------------Color
  toggleHiddenColor = () => {
    this.setState({
      isHiddenColor: !this.state.isHiddenColor
    });
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

  createFilterColor = () => {
    const { items } = this.state;
    return uniqueColor(items).map(color => {
      return <button onClick={this.changeColor}>{color}</button>;
    });
  };
  //--------------------------Conditon-----------------
  toggleHiddenCondition = () => {
    this.setState({
      isHiddenCondition: !this.state.isHiddenCondition
    });
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
  createFilterCondition = () => {
    const { items } = this.state;
    return uniqueCondition(items).map(condition => {
      return <button onClick={this.changeCondition}>{condition}</button>;
    });
  };

  //--------------------------Price--------------
  toggleHiddenPrice = () => {
    this.setState({
      isHiddenPrice: !this.state.isHiddenPrice
    });
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
  //------------------Filter-------------------
  toggleHiddenFilter = () => {
    this.setState({
      isHiddenFilter: !this.state.isHiddenFilter
    });
  };

  render() {
    const { items } = this.state;

    return (
      <Layout>
        <div className='filter-container'>
          <button onClick={this.toggleHiddenFilter}>Filter</button>
          {!this.state.isHiddenFilter && (
            <>
              <button onClick={this.toggleHiddenColor}>Color</button>
              {!this.state.isHiddenColor && this.createFilterColor()}
              <button onClick={this.toggleHiddenCondition}>Condition</button>
              {!this.state.isHiddenCondition && this.createFilterCondition()}
              <button onClick={this.toggleHiddenPrice}>Price</button>
              {!this.state.isHiddenPrice && this.createFilterPrice()}
            </>
          )}
        </div>
        <div className='search-sort-container'>
          <div className='searchbar-container'>
            Search Bar:
            <form onSubmit={this.handleSubmitSearch}>
              <input
                type="text"
                value={this.state.input}
                onChange={this.handleChangeSearch}
              />
            </form>
            <button onClick={this.reset} className='resize'>reset</button>
          </div>
          <div>
            <label htmlFor="sort">Sort: </label>
            <select id="sort" onChange={this.handleChange}>
              <option value="AZ">A-Z</option>
              <option value="ZA">Z-A</option>
              <option value="highestFirst">Price High to Low</option>
              <option value="lowestFirst">Price Low to High</option>
            </select>
          </div>

        </div>
        <div className="item-container">
          {items ? (
            items.map(item => {
              return (
                <div className="item" key={item._id}>
                  <div className="sub-item-container">
                    <img src={item.image_url} className="item-image"></img>
                  </div>
                  <div className="sub-item-container2">
                    <h5>{item.title.slice(0, 60)}...</h5>
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
  }
}
