import { useContext } from "react";
import { useContextAPI } from "../App";
import ThemeToggler from "./toggler";
import "./index.css";

const Page2 = () => {
  const { name, email, contact, color } = useContext(useContextAPI);

  return (
    <div className={color ? "dark" : "white"}>
      <header className="header">
        <ThemeToggler />
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}>
        <p>HI</p>
        <p>Username: {name}</p>
        <p>Email: {email}</p>
        <p>Contact: {contact}</p>
      </div>
    </div>
  );
};

export default Page2;
