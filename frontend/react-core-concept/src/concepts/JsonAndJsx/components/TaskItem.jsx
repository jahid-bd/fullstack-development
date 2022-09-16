const TaskItem = ({ title, text }) => {
  return (
    <li className="task-item">
      <div>
        <span className="avatar">A</span>
        <span className="name">{title}</span>
      </div>
      <p>{text}</p>
    </li>
  );
};

export default TaskItem;
