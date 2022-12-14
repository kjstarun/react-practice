import { useState } from "react";
import Two from "./two";

const One = () => {
  const [toggleView, setToggleView] = useState(false);

  return (
    <>
      <button onClick={() => setToggleView((state) => !state)}>
        {toggleView ? "Hide" : "Show"} Component
      </button>
      {toggleView && <Two />}
    </>
  );
};

export default One;
