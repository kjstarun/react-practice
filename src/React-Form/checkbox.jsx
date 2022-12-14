import { Component } from "react";

class Check extends Component {
  state = {
    check: "",
  };
  render() {
    return (
      <>
        <label>Favourite Place : </label>
        <label htmlfor="City">Ooty</label>
        <input
          type="checkbox"
          value={"Ooty"}
          onChange={(e) => {
            this.setState({ check: e.target.value });
          }}
        ></input>
        <label htmlfor="City">Kerala</label>
        <input
          type="checkbox"
          value={"Kerala"}
          onChange={(e) => {
            this.setState({ check: e.target.value });
          }}
        ></input>
        <h1>Check:{this.state.check}</h1>
      </>
    );
  }
}
export default Check;
