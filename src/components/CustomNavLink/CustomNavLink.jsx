import { Link } from './CustomNavLink.styled';

const CustomNavLink = ({ to, text }) => {
  return <Link to={to}>{text}</Link>;
};

export default CustomNavLink;
