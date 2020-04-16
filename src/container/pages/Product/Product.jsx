import React, { Component, Fragment } from "react";
import "./Product.css";
import CardProduct from "../../CardProduct/CardProduct";

class Product extends Component {
  state = {
    order: 2
  };
  handleCounterChange = newValue => {
    this.setState({
      order: newValue
    });
  };
  render() {
    return (
      <Fragment>
        <h1>Product</h1>
        <hr />
        <div className="header">
          <div className="logo">
            <img
              src="https://pbs.twimg.com/profile_images/1166936909815283713/a9jQXmx0_400x400.jpg"
              alt=""
            />
          </div>
          <div className="troley">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoqrrQ6SyvXXjtJ1H6x__7t7q2u8nFA9hua2MciHHVRtv51Yka"
              alt=""
            />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct
          onCounterChange={value => this.handleCounterChange(value)}
        />
      </Fragment>
    );
  }
}

export default Product;
