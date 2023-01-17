import { useContext } from "react";
import { Link } from "react-router-dom";
import { useContextAPI } from "../App";

const Parent = () => {
  const { color, toggletheme } = useContext(useContextAPI);
  console.log("child1", color);
  const white = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "white",
    color: "black",
  };

  const black = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "black",
    color: "white",
  };
  return (
    <>
      <div style={color ? black : white}>
        <button onClick={toggletheme}>Toggle theme</button>
        <p>I'm from parent</p>
        <Link to={"/child1"}>
          <p>Go to child 1</p>
        </Link>
      </div>
    </>
  );
};
export default Parent;
