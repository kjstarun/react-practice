import { memo, useCallback } from "react";
import { useState } from "react";

const CallTwo = memo(({ onClick }) => {
  console.log("Child render");
  return (
    <>
      <button onClick={onClick}>Increment counter 1 from child</button>
    </>
  );
});

const CallOne = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const updateOne = useCallback(() => {
    console.log("updateone is called");
    setCounter1((old) => old + 1);
  }, []);

  const updateTwo = useCallback(() => {
    console.log("updatetwo is called");
    setCounter2((old) => old + 1);
  }, []);
  console.log("Parent render");
  return (
    <>
      <p>Counter 1: {counter1}</p>
      <CallTwo onClick={updateOne} />
      <p>Counter 2: {counter2}</p>
      <button onClick={updateTwo}>Increment counter 2 from parent</button>
    </>
  );
};

export default CallOne;
