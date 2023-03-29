import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetsnapParent from "./class-comp/getsnapParent";
import Demo from "./class-comp/index.";
import ShouldParent from "./class-comp/shouldParent";
import Page1 from "./reusablecomponents/page1";
import Page2 from "./reusablecomponents/page2";

export const useContextAPI = createContext(null);
const UseContext = useContextAPI.Provider;

function App() {
  // const [color, setColor] = useState(0);
  // const toggletheme = () => setColor((prev) => !prev);
  const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [contact, setContact] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <>
      {/* <input
        type="text"
        placeholder="enter email"
        onChange={(e) => setEmail(e.target.value)}
      /> */}
      {/* <Demo email={email} /> */}
      {/* <GetsnapParent /> */}
      <ShouldParent />
    </>
  );
}

export default App;
