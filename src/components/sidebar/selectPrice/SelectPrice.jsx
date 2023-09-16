import Button from 'components/common/button/Button';
import Input from 'components/common/input/Input';
import Li from 'components/common/li/Li';
import Ul from 'components/common/ul/Ul';
import WrapperComponentModal from 'components/common/wrapper/Wrapper';
import { getAdverts } from 'components/services/advertsApi';
import { useEffect, useState } from 'react';

const SelectPrice = () => {
  const [openPriceList, setOpenPriceList] = useState(false);
  const [cars, setCars] = useState([]);
  const [filterPrice, setFilterPrice] = useState('');

  useEffect(() => {
    const getCars = async () => {
      try {
        const listOfCars = await getAdverts();
        setCars(listOfCars);
      } catch (error) {
        return error.response.data.message;
      }
    };
    getCars();
  }, []);

  const rentalPrices = cars.reduce((allRentalPrice, car) => {
    const carRentalPriceSplit = car.rentalPrice.split('');
    const carRentalPrice = Number(
      carRentalPriceSplit.slice(1, carRentalPriceSplit.length).join('')
    );
    allRentalPrice.push(carRentalPrice);
    return allRentalPrice;
  }, []);

  let maxCarRentalPrice = rentalPrices.reduce(
    (acc, number) => (acc > number ? acc : number),
    0
  );

  const costStepPrice = () => {
    let stepArr = [];
    let counter = 0;

    while (counter < maxCarRentalPrice) {
      counter += 10;
      stepArr.push(counter);
    }
    return stepArr;
  };

  const getFilterPrice = () => {
    return costStepPrice().filter(step =>
      String(step).toLowerCase().includes(filterPrice.toLowerCase())
    );
  };

  const handleChangeFilterPrice = e => {
    const { value } = e.currentTarget;
    setFilterPrice(value);
    setOpenPriceList(true);
    if (value === '') {
      setOpenPriceList(false);
    }
  };

  const handleClickOpenPriceList = () => {
    if (filterPrice !== '') {
      setFilterPrice('');
    }
    setOpenPriceList(true);
  };

  const handleClickPriceCost = (e) => {
    const { value } = e.currentTarget;
    setFilterPrice(value);
    setOpenPriceList(false);
  }

  return (
    <WrapperComponentModal flexDirection="column">
      <Input
        onChange={handleChangeFilterPrice}
        value={filterPrice}
        type="text"
        name="filterPrice"
        title="Enter a cost"
        placeholder="To $"
      />
      <Button type="button" onClick={handleClickOpenPriceList}>
        Select price
      </Button>
      <Ul>
              {getFilterPrice().map(step => {
          return (
            openPriceList && (
              <Li key={step}>
              <Button  type="button" value={step} onClick={handleClickPriceCost}>
                {step}
              </Button>
              </Li>
            )
          );
        })}
            </Ul>
    </WrapperComponentModal>
  );
};

export default SelectPrice;
