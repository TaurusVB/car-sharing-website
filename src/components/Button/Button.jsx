const { Btn } = require('./Button.styled');

const Button = ({ text, onClick }) => {
  return <Btn onClick={onClick}>{text}</Btn>;
};

export default Button;
