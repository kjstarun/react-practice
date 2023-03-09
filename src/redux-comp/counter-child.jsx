import {useSelector} from "react-redux";

const count = useSelector((state) => state.counter.value);

const CounterChild = () => {
  return <p>Counter: {count}</p>;
};
export default CounterChild;
