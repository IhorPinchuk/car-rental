import Button from 'components/common/button/Button';
import Img from 'components/common/img/Img';
import Li from 'components/common/li/Li';
import Span from 'components/common/span/Span';
import Svg from 'components/common/svg/Svg';
import Text from 'components/common/text/Text';
import TextInformationCar from 'components/common/textInformationCar/TextInformationCar';
import WrapperComponentModal from 'components/common/wrapper/Wrapper';
import ModalRentalCar from 'components/modalRentalCar/ModalRentalCar';
import { useState } from 'react';
import sprite from '../../images/sprite.svg';

const CarsCard = ({car}) => {
  const [showModal, setShowModal] = useState(false);
const { id, img, make, model, year, rentalPrice, address, rentalCompany, type, functionalities } = car
const addressArr = address.split(',');
          const city = addressArr[1];
          const country = addressArr[2];

const openModalRentalCar = () => {
  setShowModal(true);
}

const closeModalRentalCar = () => {
  setShowModal(false);
}

  return (
    <>
    <Li width = '274px' height = '426px'>
        <WrapperComponentModal width = '274px' height = '268px'>
        <Svg>
            <use href={sprite + '#icon-heart'}/>
          </Svg>
      <Img
        src={img}
        alt = {make}
      />
      </WrapperComponentModal>
      <WrapperComponentModal>
        <Text>
          {make} <Span>{model}</Span>, {year}
        </Text>
        <Text>{rentalPrice}</Text>
      </WrapperComponentModal>
      <WrapperComponentModal>
        <TextInformationCar>{city}</TextInformationCar>
        <TextInformationCar>{country}</TextInformationCar>
        <TextInformationCar>{rentalCompany}</TextInformationCar>
        <TextInformationCar>{type}</TextInformationCar>
        <TextInformationCar>{model}</TextInformationCar>
        <TextInformationCar>{id}</TextInformationCar>
        <TextInformationCar>{functionalities[0]}</TextInformationCar>        
      </WrapperComponentModal>
      <Button onClick = {openModalRentalCar}>Learn more</Button>
    </Li>
    {showModal && (<ModalRentalCar car = {car} closeModal={closeModalRentalCar}/>)}
    </>
  );
};

export default CarsCard;
