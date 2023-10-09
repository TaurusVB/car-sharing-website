import styled from '@emotion/styled';
import colors from '../../utils/colorVeriables';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${colors.backdrop};
`;

export const ModalWrap = styled.div`
  position: absolute;
  width: 541px;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;

  background-color: ${colors.white};
  border-radius: 24px;
`;

export const ButtonExit = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  &:focus svg,
  &:hover svg {
    scale: 1.1;
  }
`;
