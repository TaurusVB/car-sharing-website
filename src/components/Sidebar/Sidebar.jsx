import colors from 'utils/colorVeriables';
import {
  CompanyTextLink,
  Container,
  Link,
  LinkWrapper,
} from './Sidebar.styled';
import { AiFillCar, AiFillHome, AiTwotoneHeart } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <Container>
      <LinkWrapper>
        <Link to="/">
          <AiFillHome color={colors.blue} size={30} />
        </Link>
        <Link to="/catalog">
          <AiFillCar color={colors.blue} size={30} />
        </Link>
        <Link to="/favorites">
          <AiTwotoneHeart color={colors.blue} size={30} />
        </Link>
      </LinkWrapper>
      <CompanyTextLink to="/">Car sharing company &reg;</CompanyTextLink>
    </Container>
  );
};

export default Sidebar;
