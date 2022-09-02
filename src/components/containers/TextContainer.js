import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 60%;
  margin-top: 32px;

  p {
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.1px;
    color: #8a95a4;
  }
`;


const TextContainer = ({ children, style }) => {
  return (
    <Container style={style}>
      <p>{children}</p>
    </Container>
  )
}

export default TextContainer;