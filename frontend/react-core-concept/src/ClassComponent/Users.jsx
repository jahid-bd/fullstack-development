import React from "react";

class Users extends React.Component {
  render() {
    return (
      <div className="container my-5">
        <h1>All Created Users</h1>

        <ul className="list-group">
          {this.props.users.map((user) => (
            <li className="list-group-item">{`${user.name} : ${user.email}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
