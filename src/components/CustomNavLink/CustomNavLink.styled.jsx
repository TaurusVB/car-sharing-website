import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import colors from '../../utils/colorVeriables';

export const Link = styled(NavLink)`
  display: inline-block;
  width: 123px;
  margin: 12px 14px 12px 0;
  box-sizing: border-box;

  border: 1px solid #ff6900;
  border-radius: 30px;

  font-family: Roboto Regular, sans-serif;
  font-size: 14px;
  outline: none;
  padding: 9px 15px;
  text-align: center;
  transition: all 0.3s;

  background-color: ${props =>
    props.isblue === 'true' ? colors.blue : 'inherit'};
  border: ${props => (props.isblue === 'true' ? 'none' : '1px solid #3470FF')};
  color: ${colors.white};

  line-height: 1.13;

  &.active {
    background-color: ${colors.blue};
  }

  &.active:hover {
    background-color: ${colors.blue};
  }

  transition: all 0.3s;

  &:hover {
    background-color: ${props =>
      props.isblue === 'true' ? colors.blue : 'inherit'};
    border: ${props =>
      props.isblue === 'true' ? 'none' : '1px solid #E6533C'};
  }
`;
