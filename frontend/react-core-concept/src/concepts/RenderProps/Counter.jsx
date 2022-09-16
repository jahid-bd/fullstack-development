import { useState } from "react";

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };
  return children(count, incrementCount);
};

export default Counter;
