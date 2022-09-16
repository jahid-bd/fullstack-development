import { useStoreState, useStoreActions } from "easy-peasy";
import { useState } from "react";

const Counter = () => {
  const count = useStoreState((state) => state.count);
  const { incrementCount, decrementCount, resetCount, increOrDecreBy } =
    useStoreActions((actions) => actions);
  const [number, setNumber] = useState(0);
  const handleChange = (e) => {
    setNumber(e.target.value);
  };
  const handleSubmit = () => {
    increOrDecreBy(number);
    setNumber(0);
  };
  return (
    <div>
      <h2>Counter App</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => incrementCount()}>Increment</button>
      <button onClick={() => resetCount()}>Reset</button>
      <button onClick={() => decrementCount()}>Decrement</button>
      <div>
        <label htmlFor="">Increment or Decrement By:</label>
        <br />
        <input type="number" value={number} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Counter;
