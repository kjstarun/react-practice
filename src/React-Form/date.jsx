import { Component } from "react";

class Date extends Component {
    state = {
        date:""
    }
  render() {
    return (
      <>
        <label>Choose Travel Date : </label>
        <input
          type="date"
          value={this.state.date}
          onChange={(e) => {
            this.setState({ date: e.target.value });
          }}
        ></input>
        <h1>Date:{this.state.date}</h1>
      </>
    );
  }
}
export default Date