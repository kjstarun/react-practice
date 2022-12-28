import { memo } from "react";

const MemoChild = ({ count }) => {
  console.log("count", count);
  return (
    <>
      {console.log("My Child component is rendered")}

      <p>Hey there,I'm from the child component !</p>
    </>
  );
};
export default memo(MemoChild);
