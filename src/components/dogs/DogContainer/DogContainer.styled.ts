import styled from 'styled-components';
import { mediaQueryTablet } from '../../../styles/mixins';

export const Root = styled.div`
  margin: 64px 0px 80px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
 
  ${mediaQueryTablet} {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    font-size: 16px;
    font-weight: normal;
    line-height: 150%;
    letter-spacing: -0.06px;
    color: #383c43;
  }

  span {
    font-weight: bold;
  }
`;

export const DogInfoContainer = styled.div`
  min-width: 320px;
  margin-right: 8px;
  flex-shrink: 0;

  ${mediaQueryTablet} {
    min-width: none;
    max-width: 320px;
  }
`;

export const DogChartContainer = styled.div`
  display: block;
  margin-top: 0;
  flex-grow: 1;
  overflow: hidden;

  ${mediaQueryTablet} {
    margin-top: 40px;
    max-width: 100%;
  }
`;

export const DogImg = styled.img`
  flex: 0 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 8px;
`;
