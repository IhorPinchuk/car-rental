import Button from 'components/common/button/Button';
import Input from 'components/common/input/Input';
import Li from 'components/common/li/Li';
import Svg from 'components/common/svg/Svg';
import { getAdverts } from 'components/services/advertsApi';
import { useEffect, useState } from 'react';
import sprite from '../../../images/sprite.svg';
import Wrapper from 'components/common/wrapper/Wrapper';
import UlSelect from 'components/common/ulSelect/UlSelect';

const SelectCarBrand = () => {
  const [openCarsList, setOpenCarsList] = useState(false);
  const [cars, setCars] = useState([]);
  const [filterCarBrand, setFilterCarBrand] = useState('');

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

  const uniqueCarsArr = cars.reduce(
    (acc, car) => {
      if (acc.map[car.make]) {
        return acc;
      }
      acc.map[car.make] = true;
      acc.cars.push(car);
      return acc;
    },
    {
      map: {},
      cars: [],
    }
  );

  const getFilterCars = () => {
    const { cars } = uniqueCarsArr;
    return cars.filter(({ make }) =>
      make.toLowerCase().includes(filterCarBrand.toLowerCase())
    );
  };

  const handleChangeFilterCarBrand = e => {
    const { value } = e.currentTarget;
    setFilterCarBrand(value);
    setOpenCarsList(true);
    if (value === '') {
      setOpenCarsList(false);
    }
  };

  const handleClickOpenCarList = () => {
    if (filterCarBrand !== '') {
      setFilterCarBrand('');
    }

    if (openCarsList) {
      setOpenCarsList(false);
      return;
    }

    setOpenCarsList(true);
  };

  const handleClickCarBrand = e => {
    const { value } = e.currentTarget;
    setFilterCarBrand(value);
    setOpenCarsList(false);
  };

  return (
    <Wrapper display="block" position="relative">
      <Wrapper position="relative">
        <Input
          onChange={handleChangeFilterCarBrand}
          value={filterCarBrand}
          type="text"
          name="filterCardsBrand"
          title="Enter card brand"
          placeholder="Enter the text"
          autocomplete="off"
        />
        <Button
          type="button"
          onClick={handleClickOpenCarList}
          position="absolute"
          display="flex"
          top='50%'
          transform='translate(0, -50%)'
          right="18px"
          width="20px"
          height="20px"
          backgroundColor='transparent'
        >
          <Svg width="20px" height="20px" stroke="var(--secondary-text-color)">
            <use href={sprite + '#icon-chevron-down'} />
          </Svg>
        </Button>
      </Wrapper>
      {openCarsList && (
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
          zIndex="1"
        >
          <UlSelect>
            {getFilterCars().map(({ id, make }) => {
              return (
                <Li key={id}>
                  <Button
                    type="button"
                    value={make}
                    onClick={handleClickCarBrand}
                    backgroundColor='transparent'
                    color="var(--selectCarBtn-text-color)"
                  >
                    {make}
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

export default SelectCarBrand;
