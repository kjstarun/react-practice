import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";
import CounterChild from "./counter-child";
// import styles from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      {/* <CounterChild />
      <CounterChild />
      <CounterChild />
      <CounterChild /> */}
    </div>
  );
};
export default Counter;
