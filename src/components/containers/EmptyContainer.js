import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 50%;
  margin: 0 auto;
  text-align: center;

  p {
    font-size: 24px;
    line-height: 150%;
    letter-spacing: -0.1px;
  }
`;


const EmptyContainer = ({ children, style }) => {
  return (
    <Container style={style}>
      <p>{children}</p>
    </Container>
  )
}

export default EmptyContainer;