import { useState } from "react";
import { v4 } from "uuid";
import Button from "./button";
import Input from "./input";

const Form = () => {
  const [inputType, setInputType] = useState("");
  const [inputplaceholder, setInputPlaceholder] = useState("");
  const [list, setList] = useState([]);
  const [display, setDisplay] = useState(false);

  const createElement = () => {
    console.log("createElement called");
    setList((old) => {
      console.log("old", old);
      return [
        ...old,
        { id: v4(), type: inputType, placeholder: inputplaceholder, value: "" },
      ];
    });
    setInputType("");
    setInputPlaceholder("");
  };

  const handleInput = (id, data) => {
    console.log("data", data);
    list.map((item) => {
      if (item.id === id) {
        item.value = data;
      }
    });
    console.log("after update", list);
  };

  return (
    <>
      <div>
        <select name="type" onChange={(e) => setInputType(e.target.value)}>
          <option value="text">Text</option>
          <option value="password">Password</option>
          <option value="date">Date</option>
        </select>
        <Input
          type={"text"}
          value={inputplaceholder}
          inputplaceholder={inputplaceholder}
          onChange={setInputPlaceholder}
          placeholder="Enter a placeholder"
        />
        <Button onClick={createElement} label={"Create Input"} />
      </div>

      {list.map((item) => {
        {
          console.log("item", item);
        }
        return (
          //   <Input
          //     type={item.type}
          //     placeholder={item.placeholder}
          //     onChange={handleInput}
          //     id={item.id}
          //   />
          <input
            type={item.type}
            placeholder={item.placeholder}
            onChange={(e) => handleInput(item.id, e.target.value)}
          />
        );
      })}
      <Button onClick={setDisplay} label={"Submit form"} />

      {display &&
        list.map((item) => {
          return <p>{item.value}</p>;
        })}
    </>
  );
};
export default Form;
