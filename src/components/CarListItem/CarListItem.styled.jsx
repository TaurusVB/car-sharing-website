import styled from '@emotion/styled';
import colors from 'utils/colorVeriables';

export const ListItem = styled.li`
  flex-grow: 1;
  flex-basis: 273px;
  width: 274px;
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
  font-size: ${props => props.fontSize}px;
  font-weight: 500;
  line-height: 1.5;
`;

export const CarDetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0 28px 0;
  margin-bottom: ${props => props.marginBottom}px;
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

export const DescriptionText = styled.p`
  margin-bottom: 14px;

  color: ${colors.mainTextColor};
  font-size: 14px;
  line-height: 20px;
`;

export const RentalConditionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 8px;
  margin: 8px 0 14px 0;
`;

export const RentalCondition = styled.p`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;

  color: ${colors.mainTextColor};
  font-family: Montserrat;
  font-size: 12px;

  line-height: 1.5; /* 150% */
`;
