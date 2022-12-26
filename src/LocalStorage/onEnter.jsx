import { useEffect } from "react";
import { useState } from "react";

const OnEnter = () => {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);
  const handleKey = (key, value) => {
    console.log("handlekey called", key);
    console.log(value);
    if (key === "Enter") {
      console.log("check key");
      //   setData(value);
      setData("");
      if (value.length === 0) {
        alert("enter valid input");
      } else {
        setList((old) => {
          return [...old, data];
        });
      }
    }
  };
  useEffect(() => {
    console.log("UEBD called");
    console.log(Object.keys(localStorage));
    setList(Object.keys(localStorage));
  }, []);
  useEffect(() => {
    list.map((item) => {
      return localStorage.setItem(item, true);
    });
  }, [list]);
  return (
    <>
      <input
        name="data"
        type="text"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
        onKeyUp={(e) => {
          handleKey(e.key, e.target.value);
        }}
      />
      {list.length === 0 ? <p>Enter a data</p> : <></>}
      {list.map((item) => {
        return <p>{item}</p>;
      })}
    </>
  );
};
export default OnEnter;
