import { useStoreActions, useStoreState } from "easy-peasy";

const TodoApp = () => {
  const todos = useStoreState((state) => state.todos);
  const addTodo = useStoreActions((actions) => actions.addTodo);

  return (
    <div>
      <h1>TodoApp</h1>
      <ul>
        {todos.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={() => addTodo("New Item")}>Add Todo</button>
    </div>
  );
};

export default TodoApp;
