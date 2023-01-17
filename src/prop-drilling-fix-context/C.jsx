import {useContext} from "react";
import {Context} from "./A";

const C = () => {
    const name = useContext(Context);
  return (
    <>
          <p>Im from C {name}</p>
    </>
  );
};
export default C;
