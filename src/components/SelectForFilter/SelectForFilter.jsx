import React, { useState } from 'react';

import Select from 'react-select';
import { Label } from './SelectForFilter.styled';

const SelectForFilter = ({ data, placeholder, labelName, labelWidth }) => {
  const [value, setValue] = useState('');

  const handleChange = newValue => {
    setValue(newValue);
  };

  return (
    <Label labelWidth={labelWidth}>
      {labelName}{' '}
      <Select
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="basic-single"
        classNamePrefix="select"
        // defaultValue={colourOptions[0]}
        // isDisabled={isDisabled}
        // isLoading={isLoading}
        // isClearable={isClearable}
        // isRtl={isRtl}
        // isSearchable={isSearchable}
        name="color"
        options={data}
      />
    </Label>
  );
};

export default SelectForFilter;
