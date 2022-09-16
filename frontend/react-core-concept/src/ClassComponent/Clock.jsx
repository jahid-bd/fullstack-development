// import useState from "react";

// const Clock = () => {
//   const date = new Date().toLocaleTimeString();

//   const [time, setTime] = useState(date);
//   const [display, setDisplay] = useState(true);

//   const updateTime = () => {
//     const date = new Date().toLocaleTimeString();
//     setTime(date);
//   };

//   return (
//     <div>
//       <h1>
//         Now Time is :
//         {display ? (
//           <button
//             onClick={() => {
//               setDisplay(false);
//               setInterval(() => {
//                 updateTime();
//               }, 1000);
//             }}
//           >
//             Show Time
//           </button>
//         ) : (
//           time
//         )}
//       </h1>
//     </div>
//   );
// };

import React from "react";

class Clock extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: new Date(),
  //   };
  // }
  // Unused props so we can initialize like
  state = {
    date: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.clockTimer = this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  render() {
    console.log("Clock Rendered");
    return (
      <div>
        <h1>Hello React</h1>
        <h2>It is : {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;

/**
 * Use case of componentDidMount
 * when you want to change your state afer rendering your component then you need to use componetDidMount. Its like a window.onload or reload your page but react didnot reload your page react rerender your component.
 */
