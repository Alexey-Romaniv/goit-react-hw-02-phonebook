import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { ContactBtn } from 'components/AddedForm/AddContacts';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ListItem = styled.li`
  font-size: 18px;
  font-weight: 500;
`;

export const ContactList = ({ filterList, onDeleteContact }) => {
  return (
    <List>
      {filterList().map(({ name, id, number }) => {
        return (
          <ListItem key={id}>
            {name}: {number}{' '}
            <ContactBtn onClick={() => onDeleteContact(id)}>Delete</ContactBtn>
          </ListItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  //   filterList: PropTypes.arrayOf(
  //     PropTypes.objectOf(PropTypes.string.isRequired)
  //   ),
  filterList: PropTypes.func.isRequired,
};
