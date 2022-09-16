const Layout = (props) => {
  return (
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
      {props.children}
    </div>
  );
};

export default Layout;
