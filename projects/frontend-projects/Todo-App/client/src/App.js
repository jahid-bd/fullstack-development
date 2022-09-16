import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Header, Input, Filter, TodoList } from "./components/container/index";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
        <Input />
        <Filter />
        <TodoList />
      </Layout>
    );
  }
}

export default App;
