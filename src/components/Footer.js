import React from 'react';
import styled from 'styled-components';

import ResponsiveContainer from './containers/ResponsiveContainer';

const Root = styled.footer`
  background-color: #edf0f4;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 0;
`;

const Text = styled.p`
  font-size: 16px;
  color: #383c43;
`;

const Link = styled.a`
  color: #383c43;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: #1cbc97;
  }
`;

const Footer = () => {
  const today = new Date();

  return (
    <Root>
      <ResponsiveContainer>
        <Container>
          <Text>
            {`Data provided by `}
            <Link
              href='https://www.akc.org/most-popular-breeds/'
              target='_blank'
              rel='noreferrer'
            >
              American Kennel Club
            </Link>
          </Text>
          <Text>{today.getFullYear()}</Text>
        </Container>
      </ResponsiveContainer>
    </Root>
  )
}

export default Footer;