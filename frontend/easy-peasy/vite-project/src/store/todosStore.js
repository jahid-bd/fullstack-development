import { action, createStore, thunk } from "easy-peasy";
import axios from "axios";

const todosModal = {
  todo: [],
  addTodo: action((state, payload) => {
    return {
      todo: [...payload],
    };
  }),
  getTodos: thunk(async (actions) => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      actions.addTodo(res.data);
    } catch (e) {
      console.log(e.message);
    }
  }),
};

const store = createStore(todosModal);

export default store;
