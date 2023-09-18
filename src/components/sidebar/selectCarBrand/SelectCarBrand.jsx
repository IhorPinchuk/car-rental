import Button from 'components/common/button/Button';
import Input from 'components/common/input/Input';
import Li from 'components/common/li/Li';
import Ul from 'components/common/ul/Ul';
import WrapperComponentModal from 'components/common/wrapper/Wrapper';
import { getAdverts } from 'components/services/advertsApi';
import { useEffect, useState } from 'react';

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
    setOpenCarsList(true);
  };

  const handleClickCarBrand = e => {
    const { value } = e.currentTarget;
    setFilterCarBrand(value);
    setOpenCarsList(false);
  };

  return (
    <WrapperComponentModal flexDirection="column">
      <Input
        onChange={handleChangeFilterCarBrand}
        value={filterCarBrand}
        type="text"
        name="filterCardsBrand"
        title="Enter card brand"
        placeholder="Enter the text"
      />
      <Button type="button" onClick={handleClickOpenCarList}>
        Select car
      </Button>
      <Ul>
        {getFilterCars().map(({ id, make }) => {
          return (
            openCarsList && (
              <Li key={id}>
                <Button
                  type="button"
                  value={make}
                  onClick={handleClickCarBrand}
                >
                  {make}
                </Button>
              </Li>
            )
          );
        })}
      </Ul>
    </WrapperComponentModal>
  );
};

export default SelectCarBrand;
