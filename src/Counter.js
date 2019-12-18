import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0
  };

  handleMultiple = () => {
    const { number } = this.state;
    this.setState({
      number: number * 2
    });
  };

  handleIncrease = () => {
    this.setState(state => ({
      number: state.number + 1
    }));
  };

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>Value: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        <button onClick={this.handleMultiple}>*</button>
      </div>
    );
  }
}

export default Counter;
