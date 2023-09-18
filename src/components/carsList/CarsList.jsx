import React from 'react';
import Ul from 'components/common/ul/Ul';
import CarsCard from './CarsCard';

const CarsList = ({carsArr, carsStorage, setCarsStorage}) => {  
    
  return (    
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
  );
};

export default CarsList;
