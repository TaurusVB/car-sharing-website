import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;

  & > * {
    flex-grow: 1;
    flex-basis: 250px;
  }
`;
