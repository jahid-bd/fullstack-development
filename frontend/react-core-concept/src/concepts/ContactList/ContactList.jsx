import React from "react";

import { useState } from "react";

import Table from "./components/Table";
import ContactForm from "./components/ContactForm";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [editContact, seteditContact] = useState("");

  const [isUpdate, setIsUpdate] = useState(false);

  const setContactFunc = (contact) => {
    setContacts([
      ...contacts,
      {
        ...contact,
      },
    ]);
  };

  const getContacts = (contact) => {
    if (isUpdate) {
      let newContacts = [];
      newContacts = contacts.map((item) =>
        item.id === contact.id ? { ...contact } : item
      );
      setContacts([...newContacts]);
      setIsUpdate(false);
    } else {
      setContactFunc(contact);
    }
  };

  const deleteHandler = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const editHandler = (id) => {
    setIsUpdate(true);
    contacts.map((contact) => {
      if (contact.id === id) {
        seteditContact(contact);
      }
      return contact;
    });
  };

  return (
    <div>
      <h3>Contact Form</h3>
      <hr></hr>
      <ContactForm getContacts={getContacts} editContact={editContact} />
      <Table
        contacts={contacts}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
      />
    </div>
  );
};

export default ContactList;
