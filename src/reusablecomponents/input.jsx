import { useContext } from "react";
import { useContextAPI } from "../App";
import "./index.css";

const Input = ({ type, value, placeholder, onChange }) => {
  const { color } = useContext(useContextAPI);
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={{ width: "300px" }}
      className={color ? "input-dark" : "input-white"}
    />
  );
};

export default Input;
