import { useState } from "react";

const Table = ({ contacts, deleteHandler, editHandler }) => {
  const [filter, setFilter] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const searchCB = (contact) =>
    contact.name.includes(searchValue) || contact.email.includes(searchValue);

  let filteredContacts = [];
  if (filter === "All") {
    filteredContacts = searchValue ? contacts.filter(searchCB) : contacts;
  } else {
    filteredContacts = contacts.filter(
      (item) => item.group === filter && searchCB(item)
    );
  }

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="Filter">Filter</label>
        <select
          name="filter"
          id="filter"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="All" selected>
            All
          </option>
          <option value="">None</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
        <span>
          {" "}
          <label htmlFor="search">Search</label>
          <input
            type="text"
            name="search"
            id="search"
            value={searchValue}
            onChange={handleSearchInput}
            placeholder="serch.."
          />
        </span>
      </div>
      {contacts.length === 0 ? (
        <h3>No Contacts</h3>
      ) : (
        <table style={{ width: "50%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Group</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.group === "" ? "None" : contact.group}</td>
                <td>
                  <button onClick={() => editHandler(contact.id)}>edit</button>
                </td>
                <td>
                  <button onClick={() => deleteHandler(contact.id)}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
