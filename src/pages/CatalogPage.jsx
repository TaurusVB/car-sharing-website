import CarsList from 'components/CarsList/CarsList';
import Filter from 'components/Filter/Filter';

const CatalogPage = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Filter />
      <CarsList />
    </div>
  );
};

export default CatalogPage;
