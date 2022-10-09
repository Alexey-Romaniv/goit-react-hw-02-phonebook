import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

import { ContactForm } from './AddedForm/AddContacts';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class Phonebook extends Component {
  initialValues = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  state = {
    contacts: [...this.initialValues],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = e => {
    e.preventDefault();
    const findSameContact = this.state.contacts.find(
      el => el.name.toLocaleLowerCase() === this.state.name.toLocaleLowerCase()
    );
    if (!findSameContact) {
      this.setState({
        contacts: [
          { name: this.state.name, number: this.state.number, id: nanoid() },
          ...this.state.contacts,
        ],
      });
      this.setState({ name: '', number: '' });
    } else {
      Notify.warning(`${this.state.name} is already in contacts.`);
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };
  filterContacts = () => {
    const { filter, contacts } = this.state;
    if (this.state.filter) {
      return contacts.filter(({ name }) =>
        name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
    }
    return contacts;
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          onHandleChange={this.handleChange}
          onAddContact={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter onHandleChange={this.handleChange} filter={this.state.filter} />
        <ContactList
          filterList={this.filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
