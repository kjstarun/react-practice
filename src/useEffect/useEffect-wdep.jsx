import { useState } from "react";
import { useEffect } from "react";

import InputBox from "./input";

const UseEffectWithDependencies = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    console.log("Mounting");
  }, []);

  useEffect(() => {
    console.log("Updating : ", data);
  }, [data]);

  return (
    <>
      <InputBox value={data} onChange={(name, value) => setData(value)} />
      <p>Input Data: {data}</p>
    </>
  );
};

export default UseEffectWithDependencies;
