import{ useState } from "react";
import List from "./list";

const Condition = ({ data }) => {
  const [childState, setChildState] = useState(false);
  return (
    <div>
      <p onClick={(e) => setChildState(!childState)}>{data.name}</p>
      {childState && data.children && (
        <List data={data.children} />
      )}
    </div>
  );
};
export default Condition