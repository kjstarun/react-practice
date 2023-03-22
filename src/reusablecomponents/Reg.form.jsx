import { useContext } from "react";
import { useContextAPI } from "../App";
import Input from "./input";

const RegForm = () => {
  const { setEmail, setName, setContact, setPassword } =
    useContext(useContextAPI);
  return (
    <div className="form">
      <Input
        type="text"
        placeholder="Enter your email id"
        onChange={setEmail}
      />
      <Input type="text" placeholder="Enter your name" onChange={setName} />
      <Input
        type="text"
        placeholder="Enter your number"
        onChange={setContact}
      />
      <Input
        type="text"
        placeholder="Enter your password"
        onChange={setPassword}
      />
    </div>
  );
};

export default RegForm;
