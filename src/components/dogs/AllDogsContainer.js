import React from 'react';
import styled from 'styled-components';

import Card from '../Card';
import AllDogsChart from '../charts/AllDogsChart';


const Root = styled.div`
  margin-top: 64px;
`;

const AllDogsContainer = ({ allDogs, years }) => {
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
}

export default AllDogsContainer;