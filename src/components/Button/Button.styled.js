import styled from '@emotion/styled';
import colors from 'utils/colorVeriables';

export const Btn = styled.button`
  width: ${props => (props.widthForModal ? 'auto' : '100%')};
  display: inline-block;
  box-sizing: border-box;
  padding: 14px 44px;
  margin: 0 auto;

  border-radius: 12px;

  font-size: 14px;
  font-weight: 600;
  text-align: center;
  line-height: 1.43;
  text-decoration: none;

  transition: all 0.3s;

  background-color: ${colors.blue};
  color: ${colors.white};

  &:hover {
    background-color: ${colors.secondBlue};

    scale: 1.03;
  }
`;
