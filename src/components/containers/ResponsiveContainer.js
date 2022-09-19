import React from 'react';
import styled from 'styled-components';

import {
  mediaQueryTabletOrDesktop,
  mediaQueryTablet,
  mediaQueryMobile
} from '../../styles/mixins';

const Root = styled.div`
  max-width: 1200px;
  padding: 0;
  margin: 0 auto;

  ${mediaQueryTabletOrDesktop} {
    max-width: 100%;
    padding: 0 80px;
    margin: 0;
  }

  ${mediaQueryTablet} {
    padding: 0 64px;
  }

  ${mediaQueryMobile} {
    padding: 0 20px;
  }
`;

const ResponsiveContainer = ({ children }) => {
  return (
    <Root>{children}</Root>
  )
}

export default ResponsiveContainer;