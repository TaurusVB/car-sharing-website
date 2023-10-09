import styled from '@emotion/styled';

export const DetailsText = styled.p`
  display: flex;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;

  &::after {
    content: '';
    display: block;
    height: 16px;
    width: 1px;
    margin: 0 6px;

    background: rgba(18, 20, 23, 0.1);
  }

  &:last-child::after {
    display: none;
  }
`;
