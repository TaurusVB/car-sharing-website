import colors from 'utils/colorVeriables';
import {
  CarDetailsText,
  CarDetailsWrapper,
  DescriptionText,
  FavoriteBtn,
  ListItem,
  MainTitleItem,
  MainTitleItemWrapper,
  RentalCondition,
  RentalConditionsWrapper,
} from './CarListItem.styled';
import Button from 'components/Button/Button';
import createArrayFromCarDetails from 'utils/createArrayFromCarDetails';
import { nanoid } from 'nanoid';

import carNotFound from '../../assets/car_not_found.png';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import ImgWrapper from 'components/ImgWrapper/ImgWrapper';
import CarImage from 'components/CarImage/CarImage';
import { useDispatch } from 'react-redux';
import { toggleIdInArray } from 'redux/cars/favoritesSlice';

const CarListItem = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    document.body.classList.toggle('modal-open');
  };

  const {
    photoLink,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    engineSize,
    img,
    fuelConsumption,
    id,
    description,
    accessories,
    functionalities,
    rentalConditions,
  } = data;

  const carsDetails = createArrayFromCarDetails(
    address,
    rentalCompany,
    type,
    mileage,
    engineSize
  );

  return (
    <>
      <ListItem>
        <ImgWrapper>
          <CarImage src={photoLink || img || carNotFound} />
          <FavoriteBtn onClick={() => dispatch(toggleIdInArray(id))}>
            {false ? (
              <AiOutlineHeart size={18} color={colors.white} />
            ) : (
              <AiFillHeart size={18} color={colors.blue} />
            )}
          </FavoriteBtn>
        </ImgWrapper>
        <MainTitleItemWrapper>
          <MainTitleItem fontSize={16}>
            {make} <span style={{ color: colors.blue }}>{model}</span>, {year}
          </MainTitleItem>
          <MainTitleItem>{rentalPrice}</MainTitleItem>
        </MainTitleItemWrapper>
        <CarDetailsWrapper marginBottom={28}>
          {carsDetails.map(item => (
            <CarDetailsText key={nanoid()}>{item}</CarDetailsText>
          ))}
        </CarDetailsWrapper>
        <Button text={'Learn more'} onClick={toggleModal} />
      </ListItem>

      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <ImgWrapper>
            <CarImage src={photoLink || img || carNotFound} />
          </ImgWrapper>
          <MainTitleItemWrapper>
            <MainTitleItem fontSize={18}>
              {make} <span style={{ color: colors.blue }}>{model}</span>, {year}
            </MainTitleItem>
          </MainTitleItemWrapper>
          <CarDetailsWrapper marginBottom={14}>
            {carsDetails.map(item => (
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
          <RentalConditionsWrapper>
            {[
              ...rentalConditions.split('\n'),
              `Mileage: ${mileage}`,
              `Price: ${rentalPrice}`,
            ].map(item => (
              <RentalCondition key={nanoid()}>{item}</RentalCondition>
            ))}
          </RentalConditionsWrapper>
          <Button text={'Rental car'} onClick={toggleModal} widthForModal />
        </Modal>
      )}
    </>
  );
};

export default CarListItem;
