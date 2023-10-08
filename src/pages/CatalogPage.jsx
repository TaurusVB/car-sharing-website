import CarsList from 'components/CarsList/CarsList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/cars/operations';
import { getCars } from 'redux/cars/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const availbleCars = useSelector(getCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Filter />
      <CarsList data={availbleCars} />
    </div>
  );
};

export default CatalogPage;
