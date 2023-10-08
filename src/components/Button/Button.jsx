const { Btn } = require('./Button.styled');

const Button = ({ text, onClick, widthForModal }) => {
  return (
    <Btn onClick={onClick} widthForModal={widthForModal}>
      {text}
    </Btn>
  );
};

export default Button;
