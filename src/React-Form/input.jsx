import { useState } from "react";
import { Component } from "react";

class Input extends Component {
  state = {
    name: "",
  };

  render() {
    return (
      <>
        <label for="name">Name : </label>
        <input
          type="text"
          id="name"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        ></input>
        <h1>Name:{this.state.name}</h1>
      </>
    );
  }
}

export default Input;
