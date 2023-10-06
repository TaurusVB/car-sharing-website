const { TextDetails } = require('./Text.styled');

const Text = ({ text }) => {
  return <TextDetails>{text}</TextDetails>;
};

export default Text;
