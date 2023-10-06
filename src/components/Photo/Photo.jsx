const { CarPhoto } = require('./Photo.styled');

const Photo = ({ src, alt }) => {
  return <CarPhoto src={src} alt={alt} />;
};

export default Photo;
