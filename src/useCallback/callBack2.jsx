import { memo } from "react";

const UseCallbackTwo = ({ onClick, count1 }) => {
  console.log("Child comp rendered");
  return (
    <>
      <p>Count 1 : {count1}</p>
      <button onClick={onClick}>Increment one from child</button>
    </>
  );
};
export default memo(UseCallbackTwo);
