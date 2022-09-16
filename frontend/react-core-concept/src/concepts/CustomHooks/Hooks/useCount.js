import { useState } from "react";

const useCount = (initial = 0, min = 1, max = 10) => {
  const [count, setCount] = useState(initial);

  const addCount = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const subCount = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  return { count, addCount, subCount };
};

export default useCount;
