import React from 'react';
import styled from 'styled-components';

import ResponsiveContainer from '../containers/ResponsiveContainer';
import TextContainer from './TextContainer';
import AllDogsContainer from '../dogs/AllDogsContainer';
import DogsContainer from '../dogs/DogContainer/DogContainer';

const Root = styled.main`
  background-color: #f2f4f7;
  flex-grow: 1;
`;

const RootContainer = ({
  years,
  selectedDog,
  allDogs,
}) => {
  
  return (
    <Root>
      <ResponsiveContainer>
        <TextContainer>
          <p>
            Since 1935, the American Kennel Club has published an annual list
            of the most popular dog breeds in the United States,
            based on registration data for the nearly 200 breeds they officially recognize.
            <br />
            <br />
            Here you can check how 6 of my favorite dogs has ranked from 2013 to 2021.
          </p>
        </TextContainer>

        {selectedDog && (
          <DogsContainer
            selectedDog={selectedDog}
            years={years}
          />
        )}
        
        {!selectedDog && (
          <AllDogsContainer
            allDogs={allDogs}
            years={years}
          />
        )}
      </ResponsiveContainer>
    </Root>
  )
}

export default RootContainer;
