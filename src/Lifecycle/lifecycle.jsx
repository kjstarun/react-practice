import { Component } from "react";

class Life extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  render() {
    console.log("Render");
    return (
      <>
        <p>Hi there, I'm is a class component {this.state.current}</p>
        <button
          onClick={() => {
            this.setState({ current: this.state.current + 1 });
          }}
        >
          Increment
        </button>
      </>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
    console.log("Contructor");
  }
}

export default Life;
