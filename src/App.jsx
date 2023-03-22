import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./reusablecomponents/page1";
import Page2 from "./reusablecomponents/page2";

export const useContextAPI = createContext(null);
const UseContext = useContextAPI.Provider;

function App() {
  const [color, setColor] = useState(0);
  const toggletheme = () => setColor((prev) => !prev);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  return (
    <UseContext
      value={{
        color,
        toggletheme,
        email,
        setEmail,
        name,
        setName,
        contact,
        setContact,
        setPassword,
      }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="login" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </UseContext>
  );
}

export default App;
