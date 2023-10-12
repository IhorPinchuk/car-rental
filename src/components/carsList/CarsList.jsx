import React from 'react';
import Ul from 'components/common/ul/Ul';
import CarsCard from './CarsCard';
import Container from 'components/common/container/Container';

const CarsList = ({carsArr, carsStorage, setCarsStorage}) => {  
    
  return (
    <Container>    
      <Ul>
        {carsArr.map(car => {
          const { id } = car;
          return (
            <CarsCard
              key={id}
              car={car}
              carsStorage = {carsStorage}
              setCarsStorage = {setCarsStorage}
            />
          );
        })}
      </Ul>
      </Container>   
  );
};

export default CarsList;
