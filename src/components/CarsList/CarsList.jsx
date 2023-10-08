import { useState } from 'react';
import { List } from './CarsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/cars/operations';
import { getError } from 'redux/cars/selectors';
import CarListItem from 'components/CarListItem/CarListItem';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';

const CarsList = ({ data }) => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const error = useSelector(getError);

  const handleLoadMore = page => {
    setPage(page);
    dispatch(fetchCars(page));
  };

  return (
    <>
      <List>
        {data.map(car => (
          <CarListItem key={car.id} data={car} />
        ))}
      </List>
      {error !== 'No cars found' ? (
        <ButtonLoadMore
          text={'Load more'}
          onClick={() => handleLoadMore(page + 1)}
        />
      ) : (
        <iframe
          title="funnyPet"
          src="https://giphy.com/embed/Dh5q0sShxgp13DwrvG"
          width="480"
          height="296"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      )}
    </>
  );
};

export default CarsList;
