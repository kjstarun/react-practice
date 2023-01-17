import { useContext } from "react";
import { useContextAPI } from "../App";

const Child1 = () => {
  const { color } = useContext(useContextAPI);
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
    <div style={color ? black : white}>
      <p>I'm from Child1</p>
    </div>
  );
};
export default Child1;
