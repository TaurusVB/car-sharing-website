const { CarSharingDetailsWrapper } = require('./CarSharingDetails.styled');

const CarSharingDetails = ({ children }) => {
  return <CarSharingDetailsWrapper>{children}</CarSharingDetailsWrapper>;
};

export default CarSharingDetails;
