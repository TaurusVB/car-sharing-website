import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import CarsList from 'components/CarsList/CarsList';
import Filter from 'components/Filter/Filter';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from 'redux/cars/operations';
import { getCars } from 'redux/cars/selectors';
import carsData from '../data/carsData';

const CatalogPage = () => {
  const [displayedItems, setDisplayedItems] = useState(8);

  const handleLoadMore = () => {
    setDisplayedItems(prevCount => prevCount + 8);
  };

  const dispatch = useDispatch();

  const availbleCars = useSelector(getCars);
  const visibleData = availbleCars.slice(0, displayedItems);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Filter />
      <CarsList data={visibleData || carsData} />
      {displayedItems < availbleCars.length ? (
        <ButtonLoadMore text={'Load more'} onClick={handleLoadMore} />
      ) : (
        <iframe
          title="funnyPet"
          src="https://giphy.com/embed/Dh5q0sShxgp13DwrvG"
          width="480"
          height="296"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default CatalogPage;
