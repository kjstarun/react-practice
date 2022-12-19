import Child3 from "./child3";

const Child2 = (props) => {
  return (
    <>
          <p>This is Child2</p>
          <Child3 name={props.name} />
    </>
  );
};
export default Child2;
