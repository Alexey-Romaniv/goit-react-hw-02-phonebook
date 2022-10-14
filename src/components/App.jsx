import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import PhoneBookForm from './AddedForm/AddContacts';
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
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = ({ name, number }) => {
    const findSameContact = this.state.contacts.find(
      el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    if (!findSameContact) {
      this.setState({
        contacts: [{ name, number, id: nanoid() }, ...this.state.contacts],
      });
      this.setState({ name: '', number: '' });
    } else {
      Notify.warning(`${name} is already in contacts.`);
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
        <Section title="Phonebook">
          <PhoneBookForm onContactAdd={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter
            onHandleChange={this.handleChange}
            filter={this.state.filter}
          />
          <ContactList
            filterList={this.filterContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
