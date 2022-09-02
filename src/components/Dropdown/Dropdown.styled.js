import styled from 'styled-components';

export const Root = styled.div`
  min-width: 200px;
  position: relative;
  color: #383c43;
  z-index: 9000;
`;

export const DropdownContainer = styled.button`
  /* position: relative; */
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%; 
  margin: 0 auto;
  background-color: transparent;
  border: 0;
  font-weight: 500;
  font-size: 20px;
  padding: 0 12px;
  cursor: pointer;
  
  &:hover {
    color: #1cbc97;
  }

  svg {
    margin-left: 4px; 
    transition: all .2s ease;
    transform: ${props => (props.isDropdownOpen ? 'rotate(180deg)' : null)}; 
  }
`;

export const DropdownListContainer = styled.div`
  display: block;
  position: absolute;
  min-width: 250px;
  margin-top: 12px;
  border-radius: 8px;
  background-color: #fff;
  left: -15%;
  right: auto;
  box-shadow: 0px 4px 40px -8px rgba(56, 25, 0, 0.06), 0px 4px 40px rgba(56, 25, 0, 0.04);
`;

export const DropdownList = styled.ul``;

export const DropdownListItem = styled.li`
  list-style: none;
  margin: 4px 0;
  padding: 8px;
  font-weight: normal;
  font-size: 18px;
  cursor: pointer;
  
  &:hover {
    background-color: #1cbc97;
    color: #fff;
  }
  
  &:first-child {
    padding-top: 4px;
  }
  
  &:last-child {
    padding-bottom: 4px;
  }
`;
