import { action, createStore } from "easy-peasy";

const todoModal = {
  todos: ["Todo1", "Todo2", "Todo3"],
  addTodo: action((state, payload) => {
    // state.todos.push(payload);
    return {
      todos: [...state.todos, payload],
    };
  }),
};

const store = createStore(todoModal);

export default store;
