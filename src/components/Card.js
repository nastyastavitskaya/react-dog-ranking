import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: auto;
  background-color: #fff;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #edf0f4;
`;

const Card = ({ children, style }) => {
  return (
    <CardContainer style={style}>
      {children}
    </CardContainer>
  )
}

export default Card;