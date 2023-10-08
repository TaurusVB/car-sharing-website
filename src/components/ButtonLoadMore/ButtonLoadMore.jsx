import { Button } from './ButtonLoadMore.styled';

const ButtonLoadMore = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default ButtonLoadMore;
