import styled from 'styled-components';

export const Root = styled.header`
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  min-height: 64px;
  padding: 12px 0;
  background-color: #fff;
  border-bottom: 1px solid #edf0f4;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  // flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const Heading = styled.h1`
  flex-shrink: 1;
  font-size: 32px;
  font-weight: bold;
  color: #383c43;
  line-height: 1.25;
  letter-spacing: -0.4px;
`;

export const DropdownWrapper = styled.div`
  /* min-width: 300px; */
  flex: 0 0 auto;
`;
