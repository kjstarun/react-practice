import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
          <h3>The counter variable is below</h3>
          <p>{count}</p>
      <h2>{count % 3 === 0 ? "It is a multiple of three" : "Invalid"}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </>
  );
};
export default Counter