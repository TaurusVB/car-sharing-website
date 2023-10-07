import CarSharingDetails from 'components/CarSharingDetails/CarSharingDetails';
import ContentWrapper from 'components/ContentWrapper/ContentWrapper';
import CustomNavLink from 'components/CustomNavLink/CustomNavLink';
import MainTitle from 'components/MainTitle/MainTitle';
import Photo from 'components/Photo/Photo';
import Text from 'components/Text/Text';
import WrapperContainer from 'components/WrapperContainer/WrapperContainer';
import { Section } from 'ui/Section';
import colors from 'utils/colorVeriables';

const HomePage = () => {
  return (
    <Section>
      <WrapperContainer>
        <MainTitle>
          Welcome to{' '}
          <span style={{ color: colors.blue }}>Car sharing company!</span>{' '}
          <br /> Here you can choose the car you can rent.
        </MainTitle>
        <ContentWrapper>
          <Photo
            src="https://res.cloudinary.com/dis2fn1hk/image/upload/v1696684731/uz1sfeyoevle885q3ydj.avif"
            alt={'cars'}
          />
          <CarSharingDetails>
            <Text text="Your own car at the time of rent. Only you drive a car, music and climate in the car. We always have a stable price, regardless of the employment of cars and weather. Give your mother a ride, ride a girl or a guy, ride yourself, quickly solve your problems - rent a car for just a few minutes or hours." />
            <CustomNavLink text="Go to Catalog" to="/catalog" />
          </CarSharingDetails>
        </ContentWrapper>
      </WrapperContainer>
    </Section>
  );
};

export default HomePage;
