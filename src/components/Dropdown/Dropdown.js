import React from 'react';
import PropTypes from 'prop-types';
import { BiChevronDown } from 'react-icons/bi';

import {
  Root,
  DropdownContainer,
  DropdownListContainer,
  DropdownList,
} from './Dropdown.styled';


const Dropdown = ({
  isDropdownOpen,
  dropdownRef,
  label,
  children,
  onDropdownClick
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
  )
}

Dropdown.propTypes = {
  isDropdownOpen: PropTypes.bool,
  label: PropTypes.string,
  onDropdownClick: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  isDropdownOpen: false,
  label: 'Select',
};

export default Dropdown;