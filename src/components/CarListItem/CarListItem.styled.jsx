import styled from '@emotion/styled';
import { AiOutlineHeart } from 'react-icons/ai';
import colors from 'utils/colorVeriables';

export const ListItem = styled.li`
  flex-grow: 1;
  flex-basis: 273px;
  width: 274px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 268px;
  border-radius: 14px;

  overflow: hidden;

  & > img {
    object-fit: cover;
    object-position: center;
    border-radius: 14px;
  }
`;

export const CarImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  object-fit: cover;
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  &:hover > svg {
    scale: 1.3;
  }
`;

export const MainTitleItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`;

export const MainTitleItem = styled.p`
  color: ${colors.mainTextColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const CarDetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0 28px 0;
`;

export const CarDetailsText = styled.p`
  display: flex;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;

  &::after {
    content: '';
    display: block;
    height: 16px;
    width: 1px;
    margin: 0 6px;

    background: rgba(18, 20, 23, 0.1);
  }

  &:last-child::after {
    display: none;
  }
`;
