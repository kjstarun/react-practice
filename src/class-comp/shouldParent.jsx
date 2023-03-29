import { Component } from "react";
import GetSnapChild from "./getsnapChild";

class ShouldParent extends Component {
  constructor() {
    super();
    this.state = {
      data: 0,
    };
  }
  shouldComponentUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      return true;
    }
    return false;
  }
  render() {
    console.log("render");
    return (
      <>
        <h1>shouldComponentUpdate life cycle method {this.state.data}</h1>
        <button onClick={() => this.setState({ data: this.state.data + 1 })}>
          Click me
        </button>
      </>
    );
  }
}
export default ShouldParent;
