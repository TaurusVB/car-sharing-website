const valueAndLabelmileageCarsFilter = cars => {
  const mileageCarsSorted = cars.map(car => car.mileage).sort((a, b) => a - b);

  const uniquesCarsMileage = [...new Set(mileageCarsSorted)];

  return uniquesCarsMileage.map(mileage => ({
    value: mileage,
    label: mileage.toLocaleString('en-US'),
  }));
};

export default valueAndLabelmileageCarsFilter;
