import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../components/shared/Layout";
import { getItemById, deleteItem } from "../services/items";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: null,
      deleted: false
    };
  }

  async componentDidMount() {
    try {
      const item = await getItemById(this.props.match.params.id);
      this.setState({ item });
    } catch (err) {
      console.error(err);
    }
  }

  destroy = () => {
    deleteItem(this.state.item._id)
      .then(() => this.setState({ deleted: true }))
      .catch(console.error);
  };

  render() {
    const { item, deleted } = this.state;

    if (!item) {
      return <p>Loading...</p>;
    }

    if (deleted) {
      return (
        <Redirect
          to={{
            pathname: "/items",
            state: { msg: "Item succesfully deleted!" }
          }}
        />
      );
    }

    return (
      <Layout>
        <div className="item-detail-container">
          <div className="image-container">
            <Link to="/items">
              <span> Back to all items</span>
            </Link>
            <img src={item.image_url} className="item-detail-image"></img>
          </div>
          <div className="item-property container">
            <h2>{item.title}</h2>
            <p>
              <span className="bold">Item Description: </span>{" "}
              {item.description}
            </p>
            <p>
              <span className="bold">Condition: </span> {item.condition}
            </p>
            <p>
              <span className="bold">Item Color: </span> {item.color}
            </p>
            <p>
              <span className="bold">Price: </span> ${item.price}
            </p>
            <div className="button-container">
              <button className="danger" onClick={this.destroy}>
                Delete Item
              </button>
              <button
                className="edit"
                onClick={() =>
                  this.props.history.push(
                    `/items/${this.props.match.params.id}/edit`
                  )
                }
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Item;
