import { useContext } from "react";
import { useContextAPI } from "../App";

const ThemeToggler = () => {
  const { toggletheme, color } = useContext(useContextAPI);

  return (
    <p onClick={toggletheme}>
      Click here to switch to {color ? "light" : "dark"} mode
    </p>
  );
};

export default ThemeToggler;
