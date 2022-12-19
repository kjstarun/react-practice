import Child2 from "./child2";

const Child1 = (props) => {
  return (
    <>
      <p>This is Child1</p>
          <Child2 name={props.name} />
    </>
  );
};
export default Child1;
