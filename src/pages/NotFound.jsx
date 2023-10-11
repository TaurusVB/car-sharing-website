import MainTitleItem from 'components/MainTitleItem/MainTitleItem';

const { default: MainTitle } = require('components/MainTitle/MainTitle');

const NotFound = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <MainTitle>404</MainTitle>
      <MainTitleItem fontSize={24}>
        Sorry, you have reached a page that we could not find. It seems that you
        are lost among the numbers and letters of our virtual space. Perhaps
        this page went on vacation or decided to disappear into another
        dimension. We apologize for this inconvenience.
      </MainTitleItem>
    </div>
  );
};

export default NotFound;
