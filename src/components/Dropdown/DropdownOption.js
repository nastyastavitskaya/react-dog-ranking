import React from 'react';

import { DropdownListItem } from './Dropdown.styled';

const DropdownOption = ({ value, text, onClick }) => {
  return (
    <DropdownListItem
      value={value}
      onClick={onClick}
    >
      {text}
    </DropdownListItem>
  )
}

export default DropdownOption;