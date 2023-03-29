// const {Component} = require("react");
import React from "react";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      searchKey: 1,
      flag: true,
      count: 0,
    };
  }

  componentDidMount() {
    console.log("This is from component did mount");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((data) => data.json())
      .then((data) => this.setState({ products: [data] }));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(prevProps, prevState);
    // console.log("snapshot", snapshot);
    console.log("this is from component did update");
    if (prevState.searchKey != this.state.searchKey) {
      fetch(
        `https://jsonplaceholder.typicode.com/todos/${this.state.searchKey}`
      )
        .then((data) => data.json())
        .then((data) => this.setState({ products: [data] }));
    }
  }

  render() {
    return (
      <>
        <h1>Hi this is from class component {this.props.email}</h1>
        <input
          type="text"
          placeholder="key"
          onChange={(e) => this.setState({ searchKey: e.target.value })}
        />
        {/* {this.state.flag ? <Child /> : null} */}
        {this.state.products.map((item) => {
          return <h1>{item.id}</h1>;
        })}
        {/* <button onClick={() => this.setState({ flag: !this.state.flag })}>
          Toggle me
        </button> */}

        <h1>Get derivedstatefromprops {this.state.count}</h1>
        <Child data={this.state.count} />
        <button onClick={(e) => this.setState({ count: this.state.count + 1 })}>
          Make ++ action
        </button>
      </>
    );
  }
}

export default Demo;

class Child extends React.Component {
  // componentWillUnmount() {
  //   console.log("this is from component did unmount");
  //   window.alert(
  //     "A component is being removed you can perform any action here"
  //   );
  // }
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      value: props.data * 10,
    };
  }
  render() {
    return (
      <>
        {/* <h1>Unmount this component</h1> */}

        <h2>GetFerived state from props current value: {this.state.value}</h2>
      </>
    );
  }
}
