import React, { useState } from 'react';
import CarsList from 'components/carsList/CarsList';
import Section from 'components/common/section/Section';

const Favorites = () => {
    const [carsStorage, setCarsStorage] = useState(
        localStorage.getItem('carsStorage')
          ? JSON.parse(localStorage.getItem('carsStorage'))
          : [],
      );
      console.log(carsStorage)
//   useEffect(() => {
//     setCarsFavourite(JSON.parse(localStorage.getItem('carsStorage')))
//   }, [])

  // useEffect(() => {
  //     let storage = JSON.parse(localStorage.getItem('carsStorage'));
  //     setCars(storage);
  // }, [])

  // try {
  //     const currentCar = await getCurrentAdvert(9582);
  //      console.log(currentCar);
  //   } catch (error) {
  //     return error.response.data.message;
  //   }

  return (
    <Section>
      <CarsList
        carsArr={carsStorage}
        carsStorage={carsStorage}
      setCarsStorage={setCarsStorage}/>
    </Section>
  );
};

export default Favorites;
