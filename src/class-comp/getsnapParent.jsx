import { Component } from "react";
import GetSnapChild from "./getsnapChild";

class GetsnapParent extends Component {
  constructor() {
    super();
    this.state = {
      data: 0,
    };
  }
  render() {
    return (
      <>
        <h1>getSnapShotBeforeUpdate life cycle method</h1>
        <GetSnapChild data={this.state.data} />
        <button onClick={() => this.setState({ data: this.state.data + 1 })}>
          Click me
        </button>
      </>
    );
  }
}
export default GetsnapParent;
