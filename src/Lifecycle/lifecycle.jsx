import { Component } from "react";

class Life extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
    console.log("Contructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
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
}

export default Life;
