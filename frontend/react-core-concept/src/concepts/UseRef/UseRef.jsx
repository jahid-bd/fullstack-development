import { useEffect, useRef } from "react";
import React from "react";
import { useState } from "react";

const InputGroup = ({ type, placeholder }, ref) => {
  return (
    <>
      <label htmlFor={type}>Email</label>
      <input
        ref={ref}
        type={type}
        name={type}
        id={type}
        placeholder={placeholder}
      />
    </>
  );
};

const ForInputGroup = React.forwardRef(InputGroup);

const Clock = () => {
  const date = new Date();
  const [clock, setClock] = useState(date.toLocaleTimeString());
  // const [stop, setStop] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);

    // stop && clearInterval(interval);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h2>{clock}</h2>
      {/* <button onClick={() => (stop ? setStop(false) : setStop(true))}>
        {stop ? "Start" : "Stop"}
      </button> */}
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
    </div>
  );
};

const UseRef = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <ForInputGroup
        ref={inputRef}
        type={"email"}
        placeholder={"example@test.com"}
      />
      <Clock />
    </div>
  );
};

export default UseRef;
