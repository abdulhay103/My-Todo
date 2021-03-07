import React, { Component } from "react";

export default class Counter2 extends Component {
  state = {
    count: 0,
  };

  incrimentHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };

  dicrimentHandler = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2>Class Component Counter</h2>
        <h3>Result:{this.state.count}</h3>
        <button
          type="button"
          onClick={() => {
            this.incrimentHandler();
          }}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => {
            this.dicrimentHandler();
          }}
        >
          -
        </button>
      </div>
    );
  }
}
