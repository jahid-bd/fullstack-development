const TagItem = ({ icon, text }) => {
  return (
    <li>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </li>
  );
};

export default TagItem;
