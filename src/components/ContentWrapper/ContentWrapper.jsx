const { Wrapper } = require('./ContentWrapper.styled');

const ContentWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContentWrapper;
