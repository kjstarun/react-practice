import { createContext, useState } from "react";
import B from "./B";

export const Context = createContext(null);
const ContextProvider = Context.Provider;

const A = () => {
  const [userName, setUserName] = useState("");
  return (
    <ContextProvider value-={userName}>
      <input value={userName} onChange={(e) => setUserName(e.target.value)} />
      <p>I'm from A</p>
      <B />
    </ContextProvider>
  );
};

export default A;
