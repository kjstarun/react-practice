import { useEffect } from "react";
import { useState } from "react";
import InputBox from "./input";

const UseEffectBlank = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log("hi");
    fetch(`https://dummyjson.com/products/search?q=${"smartphones"}`)
      .then((data) => data.json())
      .then((data) => setList(data.products));
  }, []);
  const onSearch = (key, value) => {
    setSearch(value);
    fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then((data) => data.json())
      .then((data) => setList(data.products));
  };
  return (
    <>
      <InputBox value={search} onChange={onSearch} placeholder="Enter input" />
      <h1>My Movies</h1>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>{item.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default UseEffectBlank
