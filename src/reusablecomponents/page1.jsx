import { useContext } from "react";
import { Link } from "react-router-dom";
import { useContextAPI } from "../App";
import Button from "./button";
import RegForm from "./Reg.form";
import ThemeToggler from "./toggler";
import "./index.css";

const Page1 = () => {
  const { color } = useContext(useContextAPI);
  return (
    <div className={color ? "dark" : "white"}>
      <header className="header">
        <ThemeToggler />
      </header>
      <RegForm />
      <Link to={"/login"} hi={"hi"}>
        <Button label={"Login"} />
      </Link>
      <ThemeToggler />
    </div>
  );
};

export default Page1;
