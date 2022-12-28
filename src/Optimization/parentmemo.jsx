import { useState } from "react";
import MemoChild from "./childmemo";

const MemoParent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      {console.log("My parent component is rendered")}
      <p>{counter}</p>
      <button onClick={() => setCounter((old) => old + 1)}>
        Click to increment
      </button>
      <MemoChild count={0} />
      <MemoChild count={counter} />
    </>
  );
};
export default MemoParent;
