import React from 'react';
import PropTypes from 'prop-types';
import { BiChevronDown } from 'react-icons/bi';

import {
  Root,
  DropdownContainer,
  DropdownListContainer,
  DropdownList,
  DropdownListItem
} from './Dropdown.styled';

// import Option from './dropdown/Option';


const Dropdown = ({
  isDropdownOpen,
  dropdownRef,
  label,
  options,
  selectedText,
  onDropdownClick,
  onOptionClick
}) => {
  return (
    <Root ref={dropdownRef}>
      <DropdownContainer
        isDropdownOpen={isDropdownOpen}
        onClick={onDropdownClick}
      >
        {selectedText ? selectedText : label}
        <BiChevronDown />
      </DropdownContainer>
      {isDropdownOpen && (
        <DropdownListContainer>
          <DropdownList>
            {options.map(option => (
              <DropdownListItem
                key={option.id}
                onClick={() => onOptionClick((option))}
              >
                {option.name}
              </DropdownListItem>
            ))}
          </DropdownList>
        </DropdownListContainer>
      )}
    </Root>
  )
}

Dropdown.propTypes = {
  isDropdownOpen: PropTypes.bool,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  onDropdownClick: PropTypes.func.isRequired,
  onOptionClick: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  isDropdownOpen: false,
  label: 'Select',
};

export default Dropdown;