import React from 'react';
import Ul from 'components/common/ul/Ul';
import CarsCard from './CarsCard';
import Section from 'components/common/section/Section';
import { useEffect, useState } from 'react';
import { getAdvertsList } from 'components/services/advertsApi';
import Button from 'components/common/button/Button';

const CarsList = () => {
  const [carsArr, setCarsArr] = useState([]);
  const [page, setPage] = useState(1);

  console.log(carsArr)
  console.log(page)

  useEffect(() => {       
      const getCars = async () => {
        try {        
          const listOfCars = await getAdvertsList(page);        
          setCarsArr(prevCarsArr => [...prevCarsArr, ...listOfCars]);                
        } catch (error) {
          return error.response.data.message;
        }
      };
      getCars();
  }, [page]);

  
  // const handleClickLoadMore = async () => {    
  //   try {
  //     const listOfCars = await getAdvertsList(page);
  //     setCarsArr(prevCarsArr => [...prevCarsArr, ...listOfCars]);  
  //       setPage(prevPage => prevPage + 1);      
  //   } catch (error) {
  //     return error.response.data.message;
  //   }
  // }

  const handleClickLoadMore =  () => {
        setPage(prevPage => prevPage + 1);     
  }

  return (
    <Section>
      <Ul>
        {carsArr.map(car => {
          const { id } = car;
          
          return (
            <CarsCard
              key={id}
              car = {car}/>
          );
        })}
      </Ul>
      <Button type = 'button' 
      onClick={handleClickLoadMore}
      >Load more</Button>
    </Section>
  );
};

export default CarsList;
