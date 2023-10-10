import { LoaderContainer } from './Loader.styled';

import { Puff } from 'react-loader-spinner';

const Loader = () => {
  return (
    <LoaderContainer>
      <Puff
        height={'100'}
        width={'100'}
        radius={1}
        color="#3470FF"
        ariaLabel="puff-loading"
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        wrapperClass=""
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;
