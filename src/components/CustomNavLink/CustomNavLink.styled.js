import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import colors from '../../utils/colorVeriables';

export const Link = styled(NavLink)`
  display: inline-block;
  box-sizing: border-box;
  padding: 12px 50px;

  border-radius: 30px;

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
