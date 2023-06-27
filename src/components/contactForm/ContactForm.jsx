import React, { useState } from 'react';
import style from '../Class.module.css';
import { nanoid } from 'nanoid';

function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    } else if (event.target.name === 'number') {
      setNumber(event.target.value);
    }
  };

  const handleAddContact = () => {
    if (name.trim() === '' || number.trim() === '') {
      return;
    }
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    onAddContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <ul className={style.listItem}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
        <button type="button" onClick={handleAddContact}>
          Add contact
        </button>
      </ul>
    </div>
  );
}

export default ContactForm;
