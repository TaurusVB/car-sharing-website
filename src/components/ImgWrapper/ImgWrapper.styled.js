import styled from '@emotion/styled';

export const Wrapper = styled.div`
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
