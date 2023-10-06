import CarSharingDetails from 'components/CarSharingDetails/CarSharingDetails';
import ContentWrapper from 'components/ContentWrapper/ContentWrapper';
import CustomNavLink from 'components/CustomNavLink/CustomNavLink';
import MainTitle from 'components/MainTitle/MainTitle';
import Photo from 'components/Photo/Photo';
import Text from 'components/Text/Text';
import WrapperContainer from 'components/WrapperContainer/WrapperContainer';
import { Section } from 'ui/Section';

const HomePage = () => {
  return (
    <Section>
      <WrapperContainer>
        <MainTitle text="Home" />
        <ContentWrapper>
          <Photo />
          <CarSharingDetails>
            <Text text="" />
            <CustomNavLink isblue="true" text="Go to Catalog" to="/catalog" />
          </CarSharingDetails>
        </ContentWrapper>
      </WrapperContainer>
    </Section>
  );
};

export default HomePage;
