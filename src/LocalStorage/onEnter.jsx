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
          if (old.length === 0) {
            return [...old, data];
          } else {
            console.log("old", old);
            if (!old.includes(data)) {
              return [...old, data];
            } else {
              return [...old];
            }
          }
        });
      }
    }
  };

  useEffect(() => {
    console.log("UEBD called");
    console.log(JSON.parse(localStorage.getItem("Data")));
    setList(JSON.parse(localStorage.getItem("Data")));
  }, []);

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(list));
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
      {console.log("list", list)}
      {list.length === 0 || typeof(list) === "undefined" ? (
        <p>Enter a data</p>
      ) : (
        <>
          {list.map((item) => {
            console.log("map", item);
            return <p>{item}</p>;
          })}
        </>
      )}
    </>
  );
};
export default OnEnter;
