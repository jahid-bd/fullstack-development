const CommentItem = ({ avatar, name, comment }) => {
  return (
    <li>
      <div>
        <span className="avatar">{avatar}</span>
        <span className="name">{name}</span>
      </div>
      <p>{comment}</p>
    </li>
  );
};

export default CommentItem;
