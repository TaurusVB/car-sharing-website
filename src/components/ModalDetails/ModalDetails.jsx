import Button from 'components/Button/Button';
import CallLink from 'components/CallLink/CallLink';
import CarDetailsText from 'components/CarDetailsText/CarDetailsText';
import CarDetailsWrapper from 'components/CarDetailsWrapper/CarDetailsWrapper';
import CarImage from 'components/CarImage/CarImage';
import DescriptionText from 'components/DescriptionText/DescriptionText';
import ImgWrapper from 'components/ImgWrapper/ImgWrapper';
import MainTitleItem from 'components/MainTitleItem/MainTitleItem';
import MainTitleItemWrapper from 'components/MainTitleItemWrapper/MainTitleItemWrapper';
import RentalConditionsWrapper from 'components/RentalConditionsWrapper/RentalConditionsWrapper';
import { nanoid } from 'nanoid';
import colors from 'utils/colorVeriables';

const ModalDetails = ({
  srcImg,
  make,
  model,
  year,
  carsDetailsArray,
  id,
  fuelConsumption,
  description,
  accessories,
  functionalities,
  arrRentalConditions,
}) => {
  return (
    <>
      <ImgWrapper>
        <CarImage src={srcImg} />
      </ImgWrapper>
      <MainTitleItemWrapper>
        <MainTitleItem fontSize={18}>
          {make} <span style={{ color: colors.blue }}>{model}</span>, {year}
        </MainTitleItem>
      </MainTitleItemWrapper>
      <CarDetailsWrapper marginBottom={14}>
        {carsDetailsArray.map(item => (
          <CarDetailsText key={nanoid()}>{item}</CarDetailsText>
        ))}
        <CarDetailsText key={nanoid()}>Id: {id}</CarDetailsText>
        <CarDetailsText key={nanoid()}>
          Fuel Consumption: {fuelConsumption}
        </CarDetailsText>
      </CarDetailsWrapper>

      <DescriptionText>{description}</DescriptionText>
      <MainTitleItem fontSize={14}>
        Accessories and functionalities:
      </MainTitleItem>
      <CarDetailsWrapper marginBottom={24}>
        {[...accessories, ...functionalities].map(item => (
          <CarDetailsText key={nanoid()}>{item}</CarDetailsText>
        ))}
      </CarDetailsWrapper>
      <MainTitleItem fontSize={14}>Rental Conditions: </MainTitleItem>
      <RentalConditionsWrapper arrRentalConditions={arrRentalConditions} />
      <CallLink href="tel:+380961111111">
        <Button text={'Rental car'} widthForModal />
      </CallLink>
    </>
  );
};

export default ModalDetails;
