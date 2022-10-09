import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoItem = ({ todo, handleUpdate, handleDelete }) => {
  return (
    <article key={todo.id}>
      <div className="todo">
        <input
          type="checkbox"
          checked={todo.completed}
          id={todo.id}
          onChange={() => handleUpdate(todo)}
        />
        <label htmlFor={todo.id}>{todo.title}</label>
      </div>
      <button className="trash" onClick={() => handleDelete(todo.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </article>
  );
};

export default TodoItem;
