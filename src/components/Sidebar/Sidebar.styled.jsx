import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import colors from 'utils/colorVeriables';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  height: 100%;
  width: 75px;
  text-align: center;
  top: 0;
  left: 0;

  background-color: ${colors.blue};
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 56px;
  height: 250px;
  margin-top: 20px;

  border-radius: 12px;
  background-color: ${colors.white};
`;

export const Link = styled(NavLink)`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    scale 0.3s ease-in-out;

  &:nth-of-type(-n + 2) {
    border-bottom: 1px solid ${colors.blue};
  }

  &.active {
    outline: 1px solid ${colors.white};
    background-color: ${colors.blue};
  }

  &.active:nth-of-type(1) {
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }

  &.active:nth-of-type(2) {
    border-radius: 0;
  }

  &.active:nth-of-type(3) {
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  &:hover > svg {
    scale: 1.2;
  }

  &.active > svg {
    color: ${colors.white} !important;
    scale: 1.2;
  }
`;

export const CompanyTextLink = styled(NavLink)`
  position: absolute;
  width: 388px;
  bottom: 185px;
  left: -160px;

  color: ${colors.white};
  font-size: 35px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;

  rotate: -90deg;
`;
