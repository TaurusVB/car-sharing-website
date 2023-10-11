import React from 'react';
import Select from 'react-select';
import { Label } from './SelectForFilter.styled';

const SelectForFilter = ({
  data,
  placeholder,
  labelName,
  labelWidth,
  value,
  onChange,
}) => {
  return (
    <Label labelWidth={labelWidth}>
      {labelName}{' '}
      <Select
        value={value}
        onChange={selectedOption => onChange(selectedOption)}
        placeholder={placeholder}
        className="basic-single"
        classNamePrefix="select"
        name="color"
        options={data}
      />
    </Label>
  );
};

export default SelectForFilter;
