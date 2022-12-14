import { Component } from "react";

class Dropdown extends Component {
    state = {
        Drop:""
    }
  render() {
    return (
      <>
        <label htmlfor="bus">Choose a Bus:</label>
        <select
          onChange={(e) => {
            this.setState({ Drop: e.target.value });
          }}
        >
          <option value={"One"} name="bus">
            1
          </option>
          <option value={"Two"} name="bus">
            2
          </option>
        </select>
        <h1>Drop:{this.state.Drop}</h1>
      </>
    );
  }
}
export default Dropdown