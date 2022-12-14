import { useState } from "react";
import { Component } from "react";

// class Input extends Component {
//   state = {
//     name: "",
//     email: "",
//     city: "",
//   };
//   _printInput(e) {
//     const { value, name } = e.target;
//     this.setState({
//       [name]: value,
//     });
//     console.log(this.state[name]);
//   }
//   render() {
//     const { name, email, city } = this.state;
//     return (
//       <>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={this._printInput}
//         />
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={this._printInput}
//         />
//         <label>City:</label>
//         <input
//           type="text"
//           name="city"
//           value={city}
//           onChange={this._printInput}
//         />
//         <h1>Name:{name}</h1>
//         <h1>Email:{email}</h1>
//         <h1>City:{city}</h1>
//       </>
//     );
//   }
// }

const Input = () => {
  const [city, setCity] = useState("");
  return (
    <>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <h1>City:{city}</h1>
    </>
  );
};

export default Input;
