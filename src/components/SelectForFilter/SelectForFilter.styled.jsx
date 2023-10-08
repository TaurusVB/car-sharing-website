import styled from '@emotion/styled';
import colors from 'utils/colorVeriables';

export const Label = styled.label`
  width: ${props => props.labelWidth}px;
  margin-right: 18px;

  color: ${colors.secondTextColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.29;

  &:nth-of-type(4) {
    margin-top: 26px;
  }

  & .select__input-container {
    margin: 0;
    padding: 0;
  }

  & .select__value-container {
    margin: 0;
    padding: 14px 0 14px 18px;
  }

  & > div {
    width: ${props => props.labelWidth}px;
    margin-top: 8px;
  }

  &:nth-of-type(4) > div {
    margin-top: 0;
  }

  & .select__control {
    color: ${colors.mainTextColor};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.1;

    border: none;
    background-color: #f7f7fb;
    border-radius: 14px;
  }

  &:nth-of-type(3) .select__control {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 1px solid hsl(0, 0%, 80%);
  }

  &:nth-of-type(4) .select__control {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  & .select__menu ::-webkit-scrollbar {
    width: 8px;
  }

  & .select__menu ::-webkit-scrollbar-thumb {
    margin-right: 8px;

    border-radius: 10px;
    background: rgba(18, 20, 23, 0.05);
  }

  & .select__placeholder {
    color: ${colors.mainTextColor};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }
  &:nth-of-type(3) {
    margin-right: 1px;
  }

  &:nth-of-type(3) .select__indicator-separator {
    margin: 0;
    display: none;
  }

  & .select__indicator-separator {
    display: none;
  }

  &:nth-of-type(4) .select__indicator-separator {
    display: none;
  }

  &:nth-of-type(3) .select__indicator,
  &:nth-of-type(4) .select__indicator {
    display: none;
  }
`;
