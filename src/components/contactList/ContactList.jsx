import React from 'react';

function ContactList({ contacts, onDeleteContact }) {
  const handleDeleteContact = id => {
    onDeleteContact(id);
  };

  return (
    <ul className="list">
      {contacts.map(contact => (
        <li key={contact.id} className="listItem">
          {contact.name}
          <span> </span>
          {contact.number}
          <button onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
