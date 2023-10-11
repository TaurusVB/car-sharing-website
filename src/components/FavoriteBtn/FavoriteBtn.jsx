import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import colors from 'utils/colorVeriables';
import { Button } from './FavoriteBtn.styled';

const FavoriteBtn = ({ onClick, isFavorite }) => {
  return (
    <Button onClick={onClick}>
      {isFavorite ? (
        <AiOutlineHeart size={18} color={colors.white} />
      ) : (
        <AiFillHeart size={18} color={colors.blue} />
      )}
    </Button>
  );
};

export default FavoriteBtn;
