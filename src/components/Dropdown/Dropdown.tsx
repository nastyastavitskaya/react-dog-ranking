import React from 'react';
import { BiChevronDown } from 'react-icons/bi';

import {
  Root,
  DropdownContainer,
  DropdownListContainer,
  DropdownList,
} from './Dropdown.styled';


const Dropdown: React.FC<IProps> = ({
  label = 'select',
  selectedText = '',
  children,
  dropdownRef,
  isDropdownOpen,
  onDropdownClick,
}) => {
  return (
    <Root ref={dropdownRef}>
      <DropdownContainer
        isDropdownOpen={isDropdownOpen}
        onClick={onDropdownClick}
      >
        {label}
        <BiChevronDown />
      </DropdownContainer>
      {isDropdownOpen && (
        <DropdownListContainer>
          <DropdownList>
            {children}
          </DropdownList>
        </DropdownListContainer>
      )}
    </Root>
  );
}


type IProps = {
  label?: string;
  selectedText?: string;
  isDropdownOpen: boolean;
  dropdownRef: any;
  children?: React.ReactNode;
  onDropdownClick: () => void;
};

export default Dropdown;
