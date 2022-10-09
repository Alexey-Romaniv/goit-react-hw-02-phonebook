import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from 'components/AddedForm/AddContacts';

export const Filter = ({ onHandleChange, filter }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        name="filter"
        onChange={onHandleChange}
      />
    </Label>
  );
};

Filter.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
