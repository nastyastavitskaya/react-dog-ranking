import React from 'react';
import PropTypes from 'prop-types';
import {
  Root,
  Container,
  Heading,
  DropdownWrapper
} from './Header.styled';

import ResponsiveContainer from '../containers/ResponsiveContainer';
import Dropdown from '../Dropdown/Dropdown';
import DropdownOption from '../Dropdown/DropdownOption';


const Header = ({
  allDogs,
  selected,
  isDropdownOpen,
  dropdownRef,
  onDropdownClick,
  onOptionClick,
}) => {
  return (
    <Root>
      <ResponsiveContainer>
        <Container>
          <Heading>How popular is the dog?</Heading>
          <DropdownWrapper>
            <Dropdown
              label={selected.isAllSelected ? 'All dogs' : selected.dog.name}
              selectedText={selected.dog.name}
              isDropdownOpen={isDropdownOpen}
              dropdownRef={dropdownRef}
              onDropdownClick={onDropdownClick}
            >
              <DropdownOption
                text='All dogs'
                value={selected.isAllSelected}
                onClick={() => onOptionClick({ dog: '', isAllSelected: true })}
              />
              {allDogs.map(dog => (
                <DropdownOption
                  key={dog.id}
                  value={dog}
                  text={dog.name}
                  onClick={() => onOptionClick({ dog: dog, isAllSelected: false })}
                />
              ))}
            </Dropdown>
          </DropdownWrapper>
        </Container>
      </ResponsiveContainer>
    </Root>
  )
}

Header.propTypes = {
  allDogs: PropTypes.array,
  selectedDog: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  isDropdownOpen: PropTypes.bool.isRequired,
  onDropdownClick: PropTypes.func,
  onOptionClick: PropTypes.func,
};

Header.defaultProps = {
  isDropdownOpen: false,
};

export default Header;