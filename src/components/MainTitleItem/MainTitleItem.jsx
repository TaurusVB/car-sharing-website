const { TitleItem } = require('./MainTitleItem.styled');

const MainTitleItem = ({ fontSize, children }) => {
  return <TitleItem fontSize={fontSize}>{children}</TitleItem>;
};

export default MainTitleItem;
