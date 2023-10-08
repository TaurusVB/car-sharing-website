const createArrayFromCarDetails = (
  address,
  rentalCompany,
  type,
  mileage,
  engineSize
) => {
  const carsDetails = address.split(', ').slice(1);

  carsDetails.push(rentalCompany);
  carsDetails.push(type);
  carsDetails.push(mileage);
  carsDetails.push(engineSize);

  return carsDetails;
};

export default createArrayFromCarDetails;
