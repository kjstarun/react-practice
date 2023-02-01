import { useState } from "react";

const ItemList = () => {
  const [list, setList] = useState([]);
  const [inputData, setInputData] = useState("");
  const [selectedData, setSelectedData] = useState("none");

  const handleInputData = () => {
    setList((prevState) => {
      return [inputData, ...prevState];
    });
    setInputData("");
  };

  const handleSelectedData = (item) => {
    setSelectedData(item);
  };

  const vp = {
    padding: "20px 30px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  return (
    <div style={vp}>
      <h2>Item List Component</h2>
      <h5>Selected: {selectedData}</h5>
      <div>
        <input
          type="text"
          onChange={(e) => setInputData(e.target.value)}
          value={inputData}
        />

        <button onClick={handleInputData}>Send</button>
      </div>
      <ul>
        {list &&
          list.map((item) => {
            return (
              <li
                onClick={() => handleSelectedData(item)}
                style={{
                  border: "1px solid black",
                  padding: "1px",
                  width: "200px",
                  backgroundColor: selectedData === item ? "green" : "inherit",
                }}
              >
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ItemList;
