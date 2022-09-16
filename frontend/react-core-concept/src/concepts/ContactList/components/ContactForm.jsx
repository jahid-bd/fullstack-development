import { useState, useEffect } from "react";
import shortid from "shortid";

const ContactForm = ({ getContacts, editContact }) => {
  const initial_Value = {
    id: shortid.generate(),
    name: "",
    email: "",
    group: "",
  };

  const [values, setValues] = useState({ ...initial_Value });
  const { name, email, group } = values;

  const handleFormInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    getContacts(values);
    setValues({ ...initial_Value });
  };

  useEffect(() => {
    if (editContact) {
      setValues({ ...editContact });
    }
  }, [editContact]);

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleFormInput}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleFormInput}
        />
      </div>

      <div>
        <label htmlFor="group">Group</label>
        <select
          name="group"
          id="group"
          onChange={handleFormInput}
          value={group}
        >
          <option value="" selected>
            None
          </option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
      </div>
      <input type="submit" value={"Create New Contact"} />
    </form>
  );
};

export default ContactForm;
