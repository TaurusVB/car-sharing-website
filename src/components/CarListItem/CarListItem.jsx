import colors from 'utils/colorVeriables';
import { ListItem } from './CarListItem.styled';
import Button from 'components/Button/Button';
import createArrayFromCarDetails from 'utils/createArrayFromCarDetails';
import { nanoid } from 'nanoid';

import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import ImgWrapper from 'components/ImgWrapper/ImgWrapper';
import CarImage from 'components/CarImage/CarImage';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIdInArray } from 'redux/cars/favoritesSlice';
import { getIdFavorites } from 'redux/cars/selectors';
import FavoriteBtn from 'components/FavoriteBtn/FavoriteBtn';
import MainTitleItemWrapper from 'components/MainTitleItemWrapper/MainTitleItemWrapper';
import MainTitleItem from 'components/MainTitleItem/MainTitleItem';
import CarDetailsWrapper from 'components/CarDetailsWrapper/CarDetailsWrapper';
import CarDetailsText from 'components/CarDetailsText/CarDetailsText';
import ModalDetails from 'components/ModalDetails/ModalDetails';

const CarListItem = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const favoriteIds = useSelector(getIdFavorites);

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

  const mileageToLocalString = () => mileage.toLocaleString('en-US') + ' km';

  const carsDetails = createArrayFromCarDetails(
    address,
    rentalCompany,
    type,
    mileageToLocalString(),
    engineSize
  );

  return (
    <>
      <ListItem>
        <ImgWrapper>
          <CarImage src={photoLink || img} />
          <FavoriteBtn
            onClick={() => dispatch(toggleIdInArray(id))}
            isFavorite={!favoriteIds.includes(id)}
          />
        </ImgWrapper>
        <MainTitleItemWrapper>
          <MainTitleItem fontSize={16}>
            {make.length + model.length < 22 ? (
              <>
                {make} <span style={{ color: colors.blue }}>{model}</span>,{' '}
                {year}
              </>
            ) : (
              <>
                {make}, {year}
              </>
            )}
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
          <ModalDetails
            srcImg={photoLink || img}
            make={make}
            model={model}
            year={year}
            carsDetailsArray={carsDetails}
            id={id}
            fuelConsumption={fuelConsumption}
            description={description}
            accessories={accessories}
            functionalities={functionalities}
            arrRentalConditions={[
              ...rentalConditions.split('\n'),
              `Mileage: ${mileageToLocalString()}`,
              `Price: ${rentalPrice}`,
            ]}
          />
        </Modal>
      )}
    </>
  );
};

export default CarListItem;
