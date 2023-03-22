import { useContext } from "react";
import { useContextAPI } from "../App";

const Button = ({ label }) => {
  // const {color} = useContext(useContextAPI);
  const buttonClass = {
    backgroundColor: "#6a6af1",
    color: "white",
    border: "none",
    outline: "none",
    padding: "10px 15px ",
    borderRadius: "20px",
    textAlign: "center",
    marginTop: "10px",
  };

  return <button style={buttonClass}>{label}</button>;
};

export default Button;
