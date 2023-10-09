import { nanoid } from 'nanoid';
import { Condition, ConditionsWrapper } from './RentalConditionsWrapper.styled';

const RentalConditionsWrapper = ({ arrRentalConditions }) => {
  return (
    <ConditionsWrapper>
      {arrRentalConditions.map(item => (
        <Condition key={nanoid()}>{item}</Condition>
      ))}
    </ConditionsWrapper>
  );
};

export default RentalConditionsWrapper;
