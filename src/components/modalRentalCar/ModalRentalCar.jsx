import CloseBtn from 'components/common/closeBtn/CloseBtn';
import Img from 'components/common/img/Img';
import { Modal } from 'components/common/modal';
import Section from 'components/common/section/Section';
import Span from 'components/common/span/Span';
import Svg from 'components/common/svg/Svg';
import Text from 'components/common/text/Text';
import TextInformationCar from 'components/common/textInformationCar/TextInformationCar';
import { nanoid } from 'nanoid';
import sprite from '../../images/sprite.svg';
import A from 'components/common/a/A';
import Wrapper from 'components/common/wrapper/Wrapper';
import WrapperCarTitle from 'components/common/wrapperCarTitle/WrapperCarTitle';
import Ul from 'components/common/ul/Ul';
import LiCarInfo from 'components/common/liCarInfo/LiCarInfo';
import WrapperBackground from 'components/common/wrapperBackground/WrapperBackground';

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
    rentalPrice,
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
          <Svg stroke="var(--secondary-text-color)">
            <use href={sprite + '#icon-close'} />
          </Svg>
        </CloseBtn>
        <Section>
          <Wrapper
            display="block"
            marginRight="auto"
            marginLeft="auto"
            marginBottom="14px"
            width="461px"
            height="248px"
          >
            <Img src={img} alt={make} />
          </Wrapper>
          <WrapperCarTitle justifyContent="start" marginBottom="8px">
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
          <Wrapper
            
            marginBottom="14px"
          >
            <Ul display="block" marginBottom="4px">
              <LiCarInfo>
                <TextInformationCar>{city}</TextInformationCar>
              </LiCarInfo>
              <LiCarInfo>
                <TextInformationCar>{country}</TextInformationCar>
              </LiCarInfo>
              <LiCarInfo>
                <TextInformationCar>id: {id}</TextInformationCar>
              </LiCarInfo>
              <LiCarInfo>
                <TextInformationCar>Yer: {year}</TextInformationCar>
              </LiCarInfo>
              <LiCarInfo>
                <TextInformationCar>Type: {type}</TextInformationCar>
              </LiCarInfo>
            </Ul>
            <Ul display="block">
              <LiCarInfo>
                <TextInformationCar>
                  Fuel Consumption: {fuelConsumption}
                </TextInformationCar>
              </LiCarInfo>
              <LiCarInfo>
                <TextInformationCar>
                  Engine Size: {engineSize}
                </TextInformationCar>
              </LiCarInfo>
            </Ul>
          </Wrapper>

          <Text
            fontSize="14px"
            lineHeight="calc(20px / 14px)"
            color="var(--secondary-text-color)"
            marginBottom="24px"
          >
            {description}
          </Text>
          <Text
            fontSize="14px"
            fontWeight="500"
            lineHeight="calc(20px / 14px)"
            color="var(--secondary-text-color)"
            marginBottom="8px"
          >
            Accessories and functionalities:
          </Text>
          <Wrapper marginBottom="24px">
            <Ul display="block" marginBottom="4px">
              {accessories.map(accessorie => (
                <LiCarInfo key={nanoid()}>
                  <TextInformationCar>{accessorie}</TextInformationCar>
                </LiCarInfo>
              ))}
            </Ul>
            <Ul display="block">
              {functionalities.map(possibility => (
                <LiCarInfo key={nanoid()}>
                  <TextInformationCar>{possibility}</TextInformationCar>
                </LiCarInfo>
              ))}
            </Ul>
          </Wrapper>
          <Text
            fontSize="14px"
            fontWeight="500"
            lineHeight="calc(20px / 14px)"
            color="var(--secondary-text-color)"
            marginBottom="15px"
          >
            Rental Conditions:
          </Text>
          <Wrapper gap='8px' marginBottom="8px">
            <WrapperBackground>
          <Text color='var(--rental-conditions-color)'>
            {`${rentalConditionsArrOJoin} `}
            <Span>{rentalConditionsArrOSplitDel}</Span>
          </Text>
          </WrapperBackground>
          <WrapperBackground>
          <Text color='var(--rental-conditions-color)'>{rentalConditionsArr[1]}</Text>
          </WrapperBackground>
          </Wrapper>
          <Wrapper gap='8px' marginBottom="31px">
          <WrapperBackground>
          <Text color='var(--rental-conditions-color)'>{rentalConditionsArr[2]}</Text>
          </WrapperBackground>
          <WrapperBackground>
          <Text color='var(--rental-conditions-color)'>
            Mileage: <Span>{mileage.toLocaleString('en-US')}</Span>
          </Text>
          </WrapperBackground>
          <WrapperBackground>
          <Text color='var(--rental-conditions-color)'>
            Price: <Span>{newRentalPrice}$</Span>
          </Text>
          </WrapperBackground>
          </Wrapper>          
            <A href="tel:+380730000000">Rental car</A>            
        </Section>
      </>
    </Modal>
  );
};

export default ModalRentalCar;
