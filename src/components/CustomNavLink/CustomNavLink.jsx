import { Link } from './CustomNavLink.styled';

import PropTypes from 'prop-types';

const CustomNavLink = ({ to, isblue, text }) => {
  return (
    <Link isblue={isblue} to={to}>
      {text}
    </Link>
  );
};

CustomNavLink.propTypes = {
  to: PropTypes.string,
  isblue: PropTypes.string,
  text: PropTypes.string,
};

export default CustomNavLink;
