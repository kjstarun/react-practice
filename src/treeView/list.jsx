import Condition from "./condition";

const List = ({ data }) => {
  //listData
  return (
    <div>
      <ul>
        {data.map((elem) => {
          return <Condition key={elem.name} data={elem} />;
        })}
      </ul>
    </div>
  );
};
export default List