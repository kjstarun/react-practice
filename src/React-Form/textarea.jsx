import { Component } from "react";

class Textarea extends Component {
  state = {
    textarea: "",
  };
  render() {
    return (
      <>
        <label>Textarea </label>
        <textarea
          placeholder="Type a message"
          rows="1"
          cols="30"
          value={this.state.textarea}
          onChange={(e) => {
            this.setState({ textarea: e.target.value });
          }}
        ></textarea>
        <h1>textarea:{this.state.textarea}</h1>
      </>
    );
  }
}

export default Textarea;
