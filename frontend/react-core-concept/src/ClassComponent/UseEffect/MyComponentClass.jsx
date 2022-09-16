import React from "react";

class MyComponentClass extends React.Component {
  state = {
    count: 0,
    date: new Date(),
  };

  tick = () => {
    console.log("Ticked");
    this.setState({ date: new Date() });
  };

  updateCount = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  componentDidMount() {
    document.title = `Button clicked ${this.state.count} tiems`;
    this.interval = setInterval(this.tick, 1000);
  }

  componentDidUpdate() {
    document.title = `Button clicked ${this.state.count} tiems`;
  }

  componentWillUnmount() {
    console.log("Componented Unmounted");
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h2>I am a class componet side effect and lifecycle example</h2>
        <button onClick={this.updateCount}>Click</button>
        <p>It is {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default MyComponentClass;
