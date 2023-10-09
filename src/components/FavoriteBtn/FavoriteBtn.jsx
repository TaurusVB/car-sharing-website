import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import colors from 'utils/colorVeriables';

const { Button } = require('./FavoriteBtn.styled');

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
