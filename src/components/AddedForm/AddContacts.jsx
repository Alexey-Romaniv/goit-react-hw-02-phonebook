import React, { Component } from 'react';
import styled from 'styled-components';

const FormBox = styled.form`
  max-width: 500px;
  padding: 15px 10px;
  border: 2px solid black;
  border-radius: 2px;
  margin-bottom: 15px;
`;
export const Label = styled.label`
  in-bottom: 15px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
`;
export const Input = styled.input`
  er: 1px solid black;
  border-radius: 4px;
  width: 200px;
  height: 30px;
  font-size: 16px;
  padding: 3px 5px;
`;
export const ContactBtn = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  border: none;
  border-radius: 2px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;

  background-color: lightGrey;
  &:hover,
  &:focus {
    background-color: darkBlue;
    color: white;
  }
`;

const INITIAL_FORM_DATA = {
  name: '',
  number: '',
};
export default class PhoneBookForm extends Component {
  state = { ...INITIAL_FORM_DATA };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = e => {
    e.preventDefault();
    this.props.onContactAdd({ ...this.state });
    this.setState({ ...INITIAL_FORM_DATA });
  };

  render() {
    return (
      <>
        <FormBox onSubmit={this.addContact}>
          <Label>
            Name{' '}
            <Input
              onChange={this.handleChange}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Number{' '}
            <Input
              onChange={this.handleChange}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <ContactBtn>Add contact</ContactBtn>
        </FormBox>
      </>
    );
  }
}
