import { useEffect } from 'react';
import { List } from './CarsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/cars/operations';
import { getCars } from 'redux/cars/selectors';
import CarListItem from 'components/CarListItem/CarListItem';

const CarsList = () => {
  const dispatch = useDispatch();

  const availbleCars = useSelector(getCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <List>
      {availbleCars.map(car => (
        <CarListItem key={car.id} data={car} />
      ))}
    </List>
  );
};

export default CarsList;
