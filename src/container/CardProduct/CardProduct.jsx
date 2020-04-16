import React, { Component } from "react";

class CardProduct extends Component {
  state = {
    order: 2
  };

  handleCounterChange = newValue => {
    this.props.onCounterChange(newValue);
  };

  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };
  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };
  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img
            src="https://localcdn.tinkerlust.com/media/catalog/product/cache/1/image/1440x1280/9df78eab33525d08d6e5fb8d27136e95/i/m/image_29844.jpg"
            alt=""
          />
          <p className="product-title">Balenciaga Yellow Shoulder Bag</p>
          <p className="product-price">Rp 2,100,000</p>
          <div className="counter">
            <button className="minus" onClick={this.handleMinus}>
              -
            </button>
            <input
              type="text"
              className="text-count"
              value={this.state.order}
            />
            <button className="plus" onClick={this.handlePlus}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardProduct;
