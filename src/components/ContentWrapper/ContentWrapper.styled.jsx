import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  & > * {
    flex-grow: 1;
    flex-basis: 250px;
  }
`;
