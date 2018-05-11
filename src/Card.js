import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const { color, cardState } = this.props;
    const style = {};
    if (cardState !== 0) {
      style.backgroundColor = color;
    }
    return (
      <div
        className="card-container"
        style={style}
        onClick={this.props.onClick}
      />
    );
  }
}

export default Card;
