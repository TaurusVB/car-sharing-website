const { Link } = require('./CallLink.styled');

const CallLink = ({ children, href }) => {
  return <Link href={href}>{children}</Link>;
};

export default CallLink;
