const { Img } = require('./CarImage.styled');

const CarImage = ({ src, alt }) => {
  return <Img src={src} alt={alt} />;
};

export default CarImage;
