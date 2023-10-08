import styled from '@emotion/styled';
import colors from 'utils/colorVeriables';

export const Button = styled.button`
  margin: 100px auto 0 auto;

  color: ${colors.blue};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;

  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: #0b44cd;
    scale: 1.2;
  }
`;
