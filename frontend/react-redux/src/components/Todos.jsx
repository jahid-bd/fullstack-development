import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllTodos from "../services/actions/todosAction";

const Todos = () => {
  const todos = useSelector((state) => state);

  const { todoItems, loading, error } = todos;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
    console.log(todos);
  }, []);

  return (
    <div>
      <h1>Todo Items</h1>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {todoItems.length > 0 &&
        todoItems.map((todo) => (
          <li key={todo.id}>
            <p>{todo.title}</p>
          </li>
        ))}
    </div>
  );
};

export default Todos;
