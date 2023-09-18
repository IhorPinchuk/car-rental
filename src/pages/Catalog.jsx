import React, { useEffect, useState } from 'react';
import CarsList from 'components/carsList/CarsList';
import Button from 'components/common/button/Button';
import Section from 'components/common/section/Section';
import { getAdvertsList } from 'components/services/advertsApi';

const Catalog = () => {
  const [carsArr, setCarsArr] = useState([]);
  const [page, setPage] = useState(1);

  const [carsStorage, setCarsStorage] = useState(
    localStorage.getItem('carsStorage')
      ? JSON.parse(localStorage.getItem('carsStorage'))
      : [],
  );
  
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

  const handleClickLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
        <Section>   
      <CarsList carsArr = {carsArr}
      carsStorage={carsStorage}
      setCarsStorage={setCarsStorage}/>
      <Button type="button" onClick={handleClickLoadMore}>
        Load more
      </Button>
      </Section>    
  );
};

export default Catalog;
