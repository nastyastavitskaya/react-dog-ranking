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
// import Option from './Dropdown';


const Header = ({
  allDogs,
  selectedDog,
  isDropdownOpen,
  dropdownRef,
  onDropdownClick,
  onOptionClick
}) => {
  return (
    <Root>
      <ResponsiveContainer>
        <Container>
          <Heading>How popular is the dog?</Heading>
          <DropdownWrapper>
            <Dropdown
              label='All dogs'
              selectedText={selectedDog.name}
              options={allDogs}
              isDropdownOpen={isDropdownOpen}
              dropdownRef={dropdownRef}
              onDropdownClick={onDropdownClick}
              onOptionClick={onOptionClick}
            />
              {/* {allDogs.map(dog => (
                <Option
                  value={dog.id}
                  label={dog.name}
                />
              ))}
            </Dropdown> */}
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