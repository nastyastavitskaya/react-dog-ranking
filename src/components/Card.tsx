import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: auto;
  background-color: #fff;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #edf0f4;
`;

const Card:React.FC<IProps> = ({ children, style }) => {
  return (
    <CardContainer style={style}>
      {children}
    </CardContainer>
  )
};

type IProps = {
  children?: React.ReactNode,
  style?: React.CSSProperties,
};

export default Card;