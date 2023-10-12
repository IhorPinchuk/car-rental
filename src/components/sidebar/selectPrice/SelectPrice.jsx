import Button from 'components/common/button/Button';
import Input from 'components/common/input/Input';
import Li from 'components/common/li/Li';
import Svg from 'components/common/svg/Svg';
import Wrapper from 'components/common/wrapper/Wrapper';
import { getAdverts } from 'components/services/advertsApi';
import { useEffect, useState } from 'react';
import sprite from '../../../images/sprite.svg';
import UlSelect from 'components/common/ulSelect/UlSelect';

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
    if (openPriceList) {
      setOpenPriceList(false);
      return;
    }
    setOpenPriceList(true);
  };

  const handleClickPriceCost = e => {
    const { value } = e.currentTarget;
    setFilterPrice(value);
    setOpenPriceList(false);
  };

  return (
    <Wrapper display="block" position="relative">
      <Wrapper position="relative">
        <Input
          onChange={handleChangeFilterPrice}
          value={filterPrice}
          type="text"
          name="filterPrice"
          title="Enter a cost"
          placeholder="To $"
          autocomplete="off"
        />
        <Button
          type="button"
          onClick={handleClickOpenPriceList}
          position="absolute"
          display="flex"
          top='50%'
          transform='translate(0, -50%)'
          right="18px"
          width='20px'
          height='20px'
          backgroundColor='transparent'
        >
          <Svg width="20px" height="20px" stroke="var(--secondary-text-color)">
            <use href={sprite + '#icon-chevron-down'} />
          </Svg>
        </Button>
      </Wrapper>
      {openPriceList && (
        <Wrapper
          display="block"
          position="absolute"
          top="52px"
          border="1px solid var(--selectCarlist-border-color)"
          borderRadius="14px"
          paddingTop="14px"
          paddingBottom="14px"
          paddingLeft="18px"
          paddingRight="8px"
          backgroundColor="var(--selectCarlist-bg-color)"
          zIndex='1'
        >
          <UlSelect>
            {getFilterPrice().map(step => {
              return (
                <Li key={step}>
                  <Button
                    type="button"
                    value={step}
                    onClick={handleClickPriceCost}
                    backgroundColor='transparent'
                    color='var(--selectCarBtn-text-color)'
                  >
                    {step}
                  </Button>
                </Li>
              );
            })}
          </UlSelect>
        </Wrapper>
      )}
    </Wrapper>
  );
};

export default SelectPrice;
