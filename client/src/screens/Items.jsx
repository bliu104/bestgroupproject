import React from "react";
import Layout from "../components/shared/Layout";

export default function Items(props) {
  const { history, match, user, items } = props;
  const renderButton = id => {
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

  const renderItems = () => {
    if (items) {
      return items.map(item => {
        return (
          <div className="item" key={item._id}>
            <div className='sub-item-container'>
              <img src={item.image_url} className='item-image'></img>
            </div>
            <div className='sub-item-container2'>
              <h5>{item.title}</h5>
              {renderButton(item._id)}
            </div>
          </div>
        );
      });
    } else {
      return null;
    }
  };

  if (user) {
    return (
      <Layout>
        <h4>Items</h4>
        {!items ? <h3>No Items at this time.</h3> : null}
        <div className="item-container">{renderItems()}</div>
      </Layout>
    );
  } else {
    return (
      <div className="landing">
        <h2>Welcome to the Items App!</h2>
        <div className="main">
          {!items ? <h3>No Items at this time.</h3> : null}
          <div className="item-container">{renderItems()}</div>
        </div>
      </div>
    );
  }
}
