import React, { Component } from "react";
import Layout from "../components/shared/Layout";
import { getItems } from "../services/items";


export default class Items extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: null,
      itemsArr: []
    }
  }
  renderButton = id => {
    const { user,history,match } = this.props
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
  //test
  async componentDidMount() {
    try {
      const allItems = await getItems();
     
      this.setState({
        items:allItems 
      })
      let itemsArr =  allItems.map(item => {
        return (
          <div className="item" key={item._id}>
            <div className='sub-item-container'>
              <img src={item.image_url} className='item-image'></img>
            </div>
            <div className='sub-item-container2'>
        
              <h5>{item.title.slice(0, 30)}...</h5>
              {this.renderButton(item._id)}
            </div>
          </div>
        );
      });
      this.setState({
        itemsArr: itemsArr
      })
      
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    const { history, match, user } = this.props;
    const { items,itemsArr } = this.state 
    if (user) {
      return (
        <Layout>
          <h4>Items</h4>
          {!items ? <h3>No Items at this time. </h3> : null}
          <div className="item-container">{itemsArr}</div>
        </Layout>
      );
    }
  
    else {
      return (
      
        <div className="landing">
          <h2>Welcome to the Items App!</h2>
          <div className="main">
            {console.log(items)}
            {!items ? <h3>No Items at this time.</h3> : null}
            <div className="item-container">{itemsArr}</div>
          </div>
        </div>
      );
    }
  }

}
 
  
