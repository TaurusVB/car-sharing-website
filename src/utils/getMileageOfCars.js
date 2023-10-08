import carsData from '../data/carsData.json';

const mileageCarsSorted = carsData
  .map(car => car.mileage)
  .sort((a, b) => a - b);

const valueAndLabelmileageCarsFilter = mileageCarsSorted.map(mileage => ({
  value: mileage,
  label: mileage.toLocaleString('en-US'),
}));

export default valueAndLabelmileageCarsFilter;
