import React from 'react';

import {
  Root,
  DogInfoContainer,
  Container,
  DogChartContainer,
  DogImg,
} from './DogContainer.styled';

import Card from '../../Card';
import DogChart from '../../charts/DogChart';

const DogsContainer = ({ selectedDog, years }) => {
  return (
    <Root>
      <DogInfoContainer>
        <Card>
          <Container>
            <DogImg
              src={selectedDog.img}
              alt={selectedDog.name}
            />
            <>
              <p>
                <span>
                  {selectedDog.name}
                </span>
                <br />
                Last Year's Ranking:
                <span>
                  {` ${selectedDog.rating[selectedDog.rating.length - 1]}`}
                </span>
              </p>
            </> 
          </Container>
        </Card>
      </DogInfoContainer>

      <DogChartContainer>
        <Card>
          {console.log('dog parent', selectedDog.rating)}
          <DogChart
            dogRating={selectedDog.rating}
            years={years}
          />
        </Card>
      </DogChartContainer>
    </Root>
  )
}

export default DogsContainer;