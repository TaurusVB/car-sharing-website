const { DetailsWrapper } = require('./CarDetailsWrapper.styled');

const CarDetailsWrapper = ({ children, marginBottom }) => {
  return (
    <DetailsWrapper marginBottom={marginBottom}>{children}</DetailsWrapper>
  );
};

export default CarDetailsWrapper;
