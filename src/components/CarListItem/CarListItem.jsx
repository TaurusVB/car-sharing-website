import colors from 'utils/colorVeriables';
import {
  CarDetailsText,
  CarDetailsWrapper,
  CarImg,
  FavoriteBtn,
  ImgWrapper,
  ListItem,
  MainTitleItem,
  MainTitleItemWrapper,
} from './CarListItem.styled';
import Button from 'components/Button/Button';
import createArrayFromCarDetails from 'utils/createArrayFromCarDetails';
import { nanoid } from 'nanoid';

import carNotFound from '../../assets/car_not_found.png';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';

const CarListItem = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <CarImg src={photoLink || img || carNotFound} />
          <FavoriteBtn>
            {false ? (
              <AiOutlineHeart size={18} color={colors.white} />
            ) : (
              <AiFillHeart size={18} color={colors.blue} />
            )}
          </FavoriteBtn>
        </ImgWrapper>
        <MainTitleItemWrapper>
          <MainTitleItem>
            {make} <span style={{ color: colors.blue }}>{model}</span>, {year}
          </MainTitleItem>
          <MainTitleItem>{rentalPrice}</MainTitleItem>
        </MainTitleItemWrapper>
        <CarDetailsWrapper>
          {carsDetails.map(item => (
            <CarDetailsText key={nanoid()}>{item}</CarDetailsText>
          ))}
        </CarDetailsWrapper>
        <Button text={'Learn more'} onClick={toggleModal} />
      </ListItem>

      {isModalOpen && <Modal toggleModal={toggleModal} />}
    </>
  );
};

export default CarListItem;
