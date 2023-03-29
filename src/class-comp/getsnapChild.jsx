import { Component } from "react";

class GetSnapChild extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
    }
    
  componentDidUpdate(prevProps, prevState, snapshot) {
      console.log("componentDidUpdate", prevProps, prevState, snapshot);
        
    }
  getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log("getSnapshotBeforeUpdate", prevProps, prevState);
      return prevState.value * 10;
  }
  render() {
    return (
      <>
            <h1>From getSnapShotBeforeUpdate child {this.props.data}</h1>
            <button onClick={()=> this.setState({value: this.state.value + 1})}>Update state</button>
      </>
    );
  }
}

export default GetSnapChild;
