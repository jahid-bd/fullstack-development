import {
  decrement,
  increment,
  incrementByAmount,
  resetCount,
} from "../features/counter/CounterSlice";

import { useDispatch, useSelector } from "react-redux";

const Counter2 = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>State Management by redux toolkit</h1>
      <h2>Counter App</h2>
      <h3>Count {count}</h3>
      <button onClick={() => dispatch(increment())}>Incremet</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        IncremetBy5
      </button>
    </div>
  );
};

export default Counter2;
