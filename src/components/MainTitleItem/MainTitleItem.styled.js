import styled from '@emotion/styled';
import colors from 'utils/colorVeriables';

export const TitleItem = styled.p`
  color: ${colors.mainTextColor};
  font-size: ${props => props.fontSize}px;
  font-weight: 500;
  line-height: 1.5;
`;
