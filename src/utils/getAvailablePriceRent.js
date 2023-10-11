const valueAndLabelPriceRentForFilter = cars => {
  const priceRent = cars.map(car => +car.rentalPrice.substring(1));

  const uniquePrice = new Set(priceRent);

  const sortedPriceRent = [...uniquePrice].sort((a, b) => a - b);

  return sortedPriceRent.map(price => ({
    value: price,
    label: `To ${price} $`,
  }));
};

export default valueAndLabelPriceRentForFilter;
