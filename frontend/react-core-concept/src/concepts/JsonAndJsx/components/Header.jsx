const Header = ({ date, subTitle }) => {
  return (
    <div className="header">
      <h1>{date}</h1>
      <p>{subTitle}</p>
    </div>
  );
};

export default Header;
