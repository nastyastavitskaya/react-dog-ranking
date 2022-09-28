import React from 'react';
import {
  Root,
  Container,
  Heading,
  DropdownWrapper
} from './Header.styled';

import ResponsiveContainer from '../containers/ResponsiveContainer';
import Dropdown from '../Dropdown/Dropdown';
import DropdownOption from '../Dropdown/DropdownOption';

import { IState as Props } from '../../App';


const Header: React.FC<IProps> = ({
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
              label={selected.isAllSelected ? 'All dogs' : selected?.dog?.name}
              selectedText={selected?.dog?.name}
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
};

type IProps = {
  allDogs: Props["dogs"];
  selected: Props["selected"];
  isDropdownOpen: boolean;
  dropdownRef: any;
  onDropdownClick:  () => void;
  onOptionClick: (value: any) => void;
};

export default Header;
