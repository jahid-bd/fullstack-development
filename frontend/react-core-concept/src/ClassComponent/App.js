import React from "react";
// import MyComponent from "./components/UseEffect/MyComponent";

// import Clock from "./components/Clock";
// import Counter from "./components/Counter";
import SignUpForm from "./components/Form";

// import MyComponentClass from "./components/UseEffect/MyComponentClass";
import Users from "./components/Users";

class App extends React.Component {
  state = {
    users: [],
  };

  createUsers = (users) => {
    this.setState({
      users: [...this.state.users, users],
    });
  };

  // state = {
  //   isDisplay: true,
  // };

  render() {
    return (
      <div>
        {/* <Clock />
      <Counter count={5} /> */}
        <SignUpForm createUsers={this.createUsers} />

        <Users users={this.state.users} />
        {/* <MyComponentClass /> */}
        {/* {this.state.isDisplay && <MyComponent />}
        <button
          onClick={() => {
            if (this.state.isDisplay) {
              this.setState({ isDisplay: false });
            } else {
              this.setState({ isDisplay: true });
            }
          }}
        >
          {this.state.isDisplay ? "Hide" : "Show"}
        </button> */}
      </div>
    );
  }
}

export default App;
