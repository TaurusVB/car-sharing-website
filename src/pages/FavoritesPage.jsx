import CarsList from 'components/CarsList/CarsList';
import { useSelector } from 'react-redux';
import { getFavoritesCars } from 'redux/cars/selectors';

const FavoritesPage = () => {
  const favoritesCars = useSelector(getFavoritesCars);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <CarsList data={favoritesCars} />
    </div>
  );
};

export default FavoritesPage;
