import React, { useEffect, useState } from 'react';
import Button from 'components/common/button/Button';
import Img from 'components/common/img/Img';
import Svg from 'components/common/svg/Svg';
import Text from 'components/common/text/Text';
import TextInformationCar from 'components/common/textInformationCar/TextInformationCar';
import ModalRentalCar from 'components/modalRentalCar/ModalRentalCar';
import sprite from '../../images/sprite.svg';
import Wrapper from 'components/common/wrapper/Wrapper';
import Ul from 'components/common/ul/Ul';
import LiCarInfo from 'components/common/liCarInfo/LiCarInfo';
import CarCard from 'components/common/carCard/CarCard';
import WrapperCarTitle from 'components/common/wrapperCarTitle/WrapperCarTitle';

const CarsCard = ({ car, carsStorage, setCarsStorage }) => {
  const [showModal, setShowModal] = useState(false);
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    functionalities,
  } = car;

  useEffect(() => {
    if (carsStorage.length === 0) {
      localStorage.removeItem('carsStorage');
      return;
    }
    localStorage.setItem('carsStorage', JSON.stringify(carsStorage));
  }, [carsStorage]);

  const addressArr = address.split(',');
  const city = addressArr[1];
  const country = addressArr[2];

  const openModalRentalCar = () => {
    setShowModal(true);
  };

  const closeModalRentalCar = () => {
    setShowModal(false);
  };

  const isFavourite = carsStorage.find(carStorage => carStorage.id === car.id);

  const handleHeart = () => {
    if (!isFavourite) {
      setCarsStorage(prevCarsStorage => [...prevCarsStorage, car]);
      return;
    }
    setCarsStorage(prevCarsStorage =>
      prevCarsStorage.filter(prevCarStorage => prevCarStorage.id !== car.id)
    );
    // if (carsStorage.length === 0) {
    //   localStorage.removeItem('carsStorage')
    // }
  };

  return (
    <>
      <CarCard>
        <Wrapper display="block">
          <Wrapper height="268px" position="relative">
            <Button
              onClick={handleHeart}
              display="flex"
              position="absolute"
              top="14px"
              right="14px"
              width="18px"
              height="18px"
              backgroundColor="transparent"
            >
              <Svg
                stroke={
                  isFavourite ? 'var(--btn-bg-color)' : 'var(--heart-color)'
                }
                fill={isFavourite ? 'var(--btn-bg-color)' : 'transparent'}
              >
                <use href={sprite + '#icon-heart'} />
              </Svg>
            </Button>
            <Wrapper marginBottom="14px">
              <Img src={img} alt={make} />
            </Wrapper>
          </Wrapper>
          <Wrapper
            justifyContent="space-between"
            wrap="nowrap"
            marginBottom="8px"
          >
            <WrapperCarTitle>
              <Text
                fontSize="16px"
                fontWeight="500"
                color="var(--secondary-text-color)"
              >
                {make}
              </Text>
              <Text
                fontSize="16px"
                fontWeight="500"
                color="var(--accent-text-color)"
              >
                {model},
              </Text>
              <Text
                fontSize="16px"
                fontWeight="500"
                color="var(--secondary-text-color)"
              >
                {year}
              </Text>
            </WrapperCarTitle>
            <Text
              fontSize="16px"
              fontWeight="500"
              color="var(--secondary-text-color)"
            >
              {rentalPrice}
            </Text>
          </Wrapper>
          <Ul display="block" marginBottom="4px">
            <LiCarInfo>
              <TextInformationCar>{city}</TextInformationCar>
            </LiCarInfo>
            <LiCarInfo>
              <TextInformationCar>{country}</TextInformationCar>
            </LiCarInfo>
            <LiCarInfo>
              <TextInformationCar>{rentalCompany}</TextInformationCar>
            </LiCarInfo>
          </Ul>

          <Ul display="block">
            <LiCarInfo>
              <TextInformationCar>{type}</TextInformationCar>
            </LiCarInfo>
            <LiCarInfo>
              <TextInformationCar>{model}</TextInformationCar>
            </LiCarInfo>
            <LiCarInfo>
              <TextInformationCar>{id}</TextInformationCar>
            </LiCarInfo>
            <LiCarInfo>
              <TextInformationCar>{functionalities[0]}</TextInformationCar>
            </LiCarInfo>
          </Ul>
        </Wrapper>
        <Button onClick={openModalRentalCar} height="44px">
          Learn more
        </Button>
      </CarCard>
      {showModal && (
        <ModalRentalCar car={car} closeModal={closeModalRentalCar} />
      )}
    </>
  );
};

export default CarsCard;
