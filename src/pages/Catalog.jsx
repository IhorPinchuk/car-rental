import React, { useEffect, useState } from 'react';
import CarsList from 'components/carsList/CarsList';
import Button from 'components/common/button/Button';
import Section from 'components/common/section/Section';
import { getAdvertsList } from 'components/services/advertsApi';
import Container from 'components/common/container/Container';

const Catalog = () => {
  const [carsArr, setCarsArr] = useState([]);
  const [page, setPage] = useState(1);

  const [carsStorage, setCarsStorage] = useState(
    localStorage.getItem('carsStorage')
      ? JSON.parse(localStorage.getItem('carsStorage'))
      : []
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
      <Container>
        <CarsList
          carsArr={carsArr}
          carsStorage={carsStorage}
          setCarsStorage={setCarsStorage}
        />
        <Button
          type="button"
          onClick={handleClickLoadMore}
          marginTop="100px"
          margin="0 auto"
          maxWidth="81px"
          fontSize="16px"
          fontWeight="500"
          backgroundColor='transparent'
          color='var(--btn-bg-color)'
          backgroundColorHover='transparent'
          colorHover='var(--btn-hover-bg-color)'
        >
          Load more
        </Button>
      </Container>
    </Section>
  );
};

export default Catalog;
