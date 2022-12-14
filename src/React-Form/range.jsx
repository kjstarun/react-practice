import { Component } from "react";

class Range extends Component {
    state= {
        Range:""
    }
  render() {
    return (
      <>
        <label>Choose Amount Range : </label>
        <input
          type="range"
          min="0"
          max="500"
          value={this.state.Range}
          onChange={(e) => {
            this.setState({ Range: e.target.value });
          }}
        ></input>
        <h1>Range:{this.state.Range}</h1>
      </>
    );
  }
}
export default Range