import styled from '@emotion/styled';
import colors from 'utils/colorVeriables';

export const ConditionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 8px;
  margin: 8px 0 14px 0;
`;

export const Condition = styled.p`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;

  color: ${colors.mainTextColor};
  font-family: Montserrat;
  font-size: 12px;

  line-height: 1.5;
`;
