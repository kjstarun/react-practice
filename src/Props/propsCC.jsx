import { Component } from "react";

class PropsCC extends Component {
  render() {
    return (
      <>
        <p>Hi there, I'm from Class and you are learning {this.props.subject}</p>
      </>
    );
  }
}
export default PropsCC;