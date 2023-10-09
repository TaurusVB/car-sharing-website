import { List } from './CarsList.styled';
import CarListItem from 'components/CarListItem/CarListItem';

const CarsList = ({ data }) => {
  return (
    <List>
      {data.map(car => (
        <CarListItem key={car.id} data={car} />
      ))}
    </List>
  );
};

export default CarsList;
