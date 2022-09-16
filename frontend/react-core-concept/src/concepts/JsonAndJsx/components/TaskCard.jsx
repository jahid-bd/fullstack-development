import Header from "./Header";
import TaskItem from "./TaskItem";
import TagItem from "./TagItem";
import CommentItem from "./CommenItem";

const TaskCard = ({ task }) => {
  return (
    <div className="task-card" style={{ marginBottom: "10px" }}>
      <Header date={task.date} subTitle={task.subTitle} />

      <div className="tag-list">
        <ul>
          {task.tags.map((item) => (
            <TagItem icon={item.icon} text={item.text} />
          ))}
        </ul>
      </div>

      <div className="comment-header">
        <h5>Notes link to people</h5>
      </div>

      <div className="comments">
        <ul>
          <li>
            {task.comments.map((item) => (
              <CommentItem
                avatar={item.user.avatar}
                name={item.user.name}
                comment={item.comment}
              />
            ))}
          </li>
        </ul>
      </div>

      <div className="task-list">
        <h5>Task list</h5>
        <ul>
          {task.tasks.map((item) => (
            <TaskItem title={item.title} text={item.text} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskCard;
