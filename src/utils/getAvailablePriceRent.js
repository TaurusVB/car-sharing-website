import carsData from '../data/carsData.json';

const priceRent = carsData.map(car => +car.rentalPrice.substring(1));

const uniquePrice = new Set(priceRent);

const sortedPriceRent = [...uniquePrice].sort((a, b) => a - b);

const valueAndLabelPriceRentForFilter = sortedPriceRent.map(price => ({
  value: price,
  label: price,
}));

export default valueAndLabelPriceRentForFilter;
