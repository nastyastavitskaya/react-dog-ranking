import React from 'react';
import styled from 'styled-components';

import Card from '../Card';
import AllDogsChart from '../charts/AllDogsChart';

import { IState as Props } from '../../App';

const Root = styled.div`
  margin-top: 64px;
`;

const AllDogsContainer: React.FC<IProps> = ({ allDogs, years }) => {
  return (
    <Root>
      <Card>
        <AllDogsChart
          allDogs={allDogs}
          years={years}
        />
      </Card>
    </Root>
  )
};

type IProps = {
  allDogs: Props["dogs"];
  years: Props["years"];
};

export default AllDogsContainer;

