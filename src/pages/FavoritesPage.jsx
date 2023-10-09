import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import CarsList from 'components/CarsList/CarsList';
import CustomNavLink from 'components/CustomNavLink/CustomNavLink';
import MainTitle from 'components/MainTitle/MainTitle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from 'redux/cars/operations';
import { getFavoritesCars } from 'redux/cars/selectors';

const FavoritesPage = () => {
  const [displayedItems, setDisplayedItems] = useState(8);

  const handleLoadMore = () => {
    setDisplayedItems(prevCount => prevCount + 8);
  };

  const availbleCars = useSelector(getFavoritesCars);

  const visibleData = availbleCars.slice(0, displayedItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      <MainTitle>
        Hello, here will be stored all the cars that you added to your favorite
      </MainTitle>

      <CarsList data={visibleData} />
      {displayedItems < availbleCars.length ? (
        <ButtonLoadMore onClick={handleLoadMore} text={'Load more'} />
      ) : (
        <CustomNavLink text="Go to Catalog" to="/catalog" />
      )}
    </div>
  );
};

export default FavoritesPage;
