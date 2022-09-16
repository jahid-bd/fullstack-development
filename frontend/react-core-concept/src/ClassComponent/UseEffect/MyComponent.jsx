import { useState, useEffect } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const tick = () => {
    console.log("Ticked");
    setDate(new Date());
  };

  useEffect(() => {
    console.log("Count updated");
    document.title = `Button Clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log("Time updated");
    const interval = setInterval(tick, 1000);

    return () => {
      console.log("Component unmounted");
      clearInterval(interval);
    };
  }, []);

  // The [] depandance is works like componentDidMOunt() for only one time render
  // The return statement works like componentWillUnmount() for stop timer or stop updating states

  const updateCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>I am a example of useEffect hock</h2>
      <button onClick={updateCount}>Click</button>
      <p>It is {date.toLocaleTimeString()}</p>
    </div>
  );
};

export default MyComponent;
