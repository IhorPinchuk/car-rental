import CloseBtn from 'components/common/closeBtn/CloseBtn';
import Img from 'components/common/img/Img';
import { Modal } from 'components/common/modal';
import Section from 'components/common/section/Section';
import Span from 'components/common/span/Span';
import Svg from 'components/common/svg/Svg';
import Text from 'components/common/text/Text';
import TextInformationCar from 'components/common/textInformationCar/TextInformationCar';
import WrapperComponentModal from 'components/common/wrapper/Wrapper';
import { nanoid } from 'nanoid';
import sprite from '../../images/sprite.svg';

const ModalRentalCar = ({ closeModal, car }) => {
  const {
    id,
    img,
    make,
    model,
    year,    
    address,    
    type,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
    rentalPrice
  } = car;
  const addressArr = address.split(',');
  const city = addressArr[1];
  const country = addressArr[2];
  const rentalConditionsArr = rentalConditions.split('\n');
  const rentalConditionsArrOSplit = rentalConditionsArr[0].split(' ');
  const rentalConditionsArrOSplitDel = rentalConditionsArrOSplit.pop();
  const rentalConditionsArrOJoin = rentalConditionsArrOSplit.join(' ');
  const rentalPriceSplit = rentalPrice.split('');
    const newRentalPrice = Number(
      rentalPriceSplit.slice(1, rentalPriceSplit.length).join('')
    );     
  return (
    <Modal onClose={closeModal}>
      <>
      <CloseBtn onClick={closeModal}>
          <Svg>
            <use href={sprite + '#icon-close'}/>
          </Svg>
        </CloseBtn>
      <Section>
        <WrapperComponentModal width="461px" height="248px">
          <Img src={img} alt={make} />
        </WrapperComponentModal>
        <Text>
          {make} <Span>{model}</Span>, {year}
        </Text>
        <WrapperComponentModal>
          <TextInformationCar>{city}</TextInformationCar>
          <TextInformationCar>{country}</TextInformationCar>
          <TextInformationCar>id: {id}</TextInformationCar>
          <TextInformationCar>Yer: {year}</TextInformationCar>
          <TextInformationCar>Type: {type}</TextInformationCar>
          <TextInformationCar>
            Fuel Consumption: {fuelConsumption}
          </TextInformationCar>
          <TextInformationCar>Engine Size: {engineSize}</TextInformationCar>
        </WrapperComponentModal>
        <Text>{description}</Text>
        <Text>Accessories and functionalities:</Text>
        <WrapperComponentModal>
          {accessories.map(accessorie => (
            <TextInformationCar key={nanoid()}>{accessorie}</TextInformationCar>
          ))}
          {functionalities.map(possibility => (
            <TextInformationCar key={nanoid()}>
              {possibility}
            </TextInformationCar>
          ))}
        </WrapperComponentModal>
        <Text>Rental Conditions: </Text>
        <Text>{rentalConditionsArrOJoin} <Span>{rentalConditionsArrOSplitDel}</Span></Text>
        <Text>{rentalConditionsArr[1]}</Text>
        <Text>{rentalConditionsArr[2]}</Text>        
        <Text>Mileage: <Span>{mileage.toLocaleString('en-US')}</Span></Text>        
        <Text>Price: <Span>{newRentalPrice}$</Span></Text>        
      </Section>
      </>
    </Modal>
  );
};

export default ModalRentalCar;
