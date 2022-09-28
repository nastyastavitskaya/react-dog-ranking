import React from 'react';

import { DropdownListItem } from './Dropdown.styled';

const DropdownOption: React.FC<IProps> = ({ value, text, onClick }) => {
  return (
    <DropdownListItem
      value={value}
      onClick={onClick}
    >
      {text}
    </DropdownListItem>
  )
}

type IProps = {
  value: any;
  text: string;
  onClick: any;
}

export default DropdownOption;