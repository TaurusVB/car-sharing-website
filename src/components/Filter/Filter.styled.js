import styled from '@emotion/styled';

export const FilterWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  align-items: flex-end;

  & > * {
    flex-grow: 1;
    flex-basis: 125px;
  }
`;
