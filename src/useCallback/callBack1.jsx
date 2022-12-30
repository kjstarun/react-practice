import { useCallback, useState } from "react";
import UseCallbackTwo from "./callBack2";

const UseCallbackOne = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const updateOne = useCallback(() => {
    console.log("updateOne called");
    setCount1((old) => old + 1);
  },[]);
  const updateTwo = () => {
    console.log("updateTwo called");
    setCount2((old) => old + 1);
  };
  console.log("Parent comp rendered");
  return (
    <>
      <UseCallbackTwo onClick={updateOne} count1={count1} />
      <p>Count 2 : {count2}</p>
      <button onClick={updateTwo}>Increment two from parent</button>
    </>
  );
};
export default UseCallbackOne;
