import { Component } from "react";

class Radio extends Component {
    state = {
        radio:""
    }
  render() {
    return (
      <>
        <label>Gender : </label>
        <label htmlfor="Male">Male</label>
        <input
          type="radio"
          id="Male"
          name="gender"
          value={"Male"}
          onChange={(e) => {
            this.setState({ radio: e.target.value });
          }}
        ></input>
        <label htmlfor="Female">Female</label>
        <input
          type="radio"
          id="Female"
          name="gender"
          value={"Female"}
          onChange={(e) => {
            this.setState({ radio: e.target.value });
          }}
        ></input>
        <h1>Radio:{this.state.radio}</h1>
      </>
    );
  }
}
export default Radio 