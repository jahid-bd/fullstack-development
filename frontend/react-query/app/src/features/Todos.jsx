import { useMutation, useQuery, useQueryClient } from "react-query";
import shortid from "shortid";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../api/todosApi";
import TodoForm from "./component/TodoForm";
import TodoItem from "./component/TodoList";

// json-server -w ./data/db.json -p 3500

const Todos = () => {
  // Access The Client
  const queryClient = useQueryClient();

  //To just get data from server we need to use of useQuery, first argument is the api call and the second one the chache data key

  const {
    isLoading,
    isError,
    error,
    data: todos,
  } = useQuery("todos", getTodos, {
    select: (data) => data.sort((a, b) => b.id - a.id),
  });

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      //invalidate cache and refresh
      queryClient.invalidateQueries("todos");
    },
  });

  const updateTodoMutation = useMutation(updateTodo, {
    onSuccess: () => {
      //invalidate cache and refresh
      queryClient.invalidateQueries("todos");
    },
  });

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      //invalidate cache and refresh
      queryClient.invalidateQueries("todos");
    },
  });

  const getTodoData = (data) => {
    addTodoMutation.mutate({
      userId: shortid.generate(),
      title: data,
      completed: false,
    });
  };

  const handleUpdate = (todo) => {
    updateTodoMutation.mutate({ ...todo, completed: !todo.completed });
  };

  const handleDelete = (id) => {
    deleteTodoMutation.mutate({ id });
  };

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    content = todos.map((todo) => (
      <TodoItem
        todo={todo}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    ));
  }
  return (
    <div>
      <TodoForm getTodoData={getTodoData} />
      {content}
    </div>
  );
};

export default Todos;
