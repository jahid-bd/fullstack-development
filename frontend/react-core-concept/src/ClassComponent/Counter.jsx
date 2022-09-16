// import { useState } from "react";
// const Counter = () => {
//   const [counter, setCount] = useState(0);
//   return (
//     <>
//       <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
//       <h2>{counter}</h2>
//       <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
//     </>
//   );
// };

import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  increaseCount() {
    this.setState((state, props) => ({ counter: state.counter + props.count }));
  }

  decreaseCount() {
    this.setState((state, props) => ({ counter: state.counter - props.count }));
  }

  render() {
    console.log("Counter Rendered");
    return (
      <div>
        <button onClick={() => this.increaseCount()}>+</button>
        <h2>{this.state.counter}</h2>
        <button onClick={() => this.decreaseCount()}>-</button>
      </div>
    );
  }
}

export default Counter;
