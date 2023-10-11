import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import CarsList from 'components/CarsList/CarsList';
import Filter from 'components/Filter/Filter';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from 'redux/cars/operations';
import { getIsLoading } from 'redux/cars/selectors';
import carsData from '../data/carsData';
import Loader from 'components/Loader/Loader';
import { getFilteredCars } from 'redux/filter/selectors';
import { resetStatusFilter } from 'redux/filter/slice';

const CatalogPage = () => {
  const [displayedItems, setDisplayedItems] = useState(8);

  const handleLoadMore = () => {
    setDisplayedItems(prevCount => prevCount + 8);
  };

  const dispatch = useDispatch();

  const filteredCars = useSelector(getFilteredCars);

  const isLoading = useSelector(getIsLoading);
  const visibleData = filteredCars.slice(0, displayedItems);

  useEffect(() => {
    dispatch(resetStatusFilter());
    dispatch(fetchAllCars());
  }, [dispatch]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Filter />
      <CarsList data={visibleData || carsData} />
      {displayedItems < filteredCars.length && (
        <ButtonLoadMore text={'Load more'} onClick={handleLoadMore} />
      )}

      {isLoading && <Loader />}
    </div>
  );
};

export default CatalogPage;
