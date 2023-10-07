import { Link } from './CustomNavLink.styled';

import PropTypes from 'prop-types';

const CustomNavLink = ({ to, text }) => {
  return (
    <Link to={to}>
      {text}
    </Link>
  );
};

CustomNavLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
};

export default CustomNavLink;
