import Task from "../Task";

const TodoList = () => {
  return (
    <>
      {/* <!-- Todo list section --> */}
      <div className="row mx-1 px-5 pb-3 w-80">
        <div className="col mx-auto">
          {/* <!-- Todo Item 1 --> */}
          <Task />
          <Task />
        </div>
      </div>
    </>
  );
};

export default TodoList;
