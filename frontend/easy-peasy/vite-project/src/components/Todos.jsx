import { useStoreActions, useStoreState } from "easy-peasy";
import React from "react";
import { useEffect } from "react";

const Todos = () => {
  const todo = useStoreState((state) => state.todo);
  const getTodos = useStoreActions((actions) => actions.getTodos);

  useEffect(() => {
    getTodos();
  }, []);
  useEffect(() => {
    console.log(todo);
  }, [todo]);

  return (
    <div>
      <h1>All Todo lists</h1>
      {todo.length > 0 &&
        todo.map((item) => <li key={item.id}>{item.title}</li>)}
    </div>
  );
};

export default Todos;
