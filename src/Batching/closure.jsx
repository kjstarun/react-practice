import { Component } from "react";

class Closure extends Component {
  state = {
    counter: 0,
  };
    _incrementCounter = () => {

    //  The below one is stale closure (it is an issue) 
        
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
      
    //   The below one is batch update
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };
  render() {
    const { counter } = this.state;
    return (
      <>
        <button onClick={this._incrementCounter}>Click me</button>
        <p>Count: {counter}</p>
      </>
    );
  }
}
export default Closure;
