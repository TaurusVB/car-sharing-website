import SelectForFilter from 'components/SelectForFilter/SelectForFilter';
import { BtnSearch, FilterWrapper } from './Filter.styled';
import carsBrand from 'data/carsBrand';
import valueAndLabelPriceRentForFilter from 'utils/getAvailablePriceRent';
import { useState } from 'react';
import valueAndLabelmileageCarsFilter from 'utils/getMileageOfCars';
import CustomNavLink from 'components/CustomNavLink/CustomNavLink';
import Button from 'components/Button/Button';

const Filter = () => {
  return (
    <FilterWrapper>
      <SelectForFilter
        data={carsBrand}
        placeholder="Enter the text"
        labelName="Car brand"
        labelWidth={224}
      />
      <SelectForFilter
        data={valueAndLabelPriceRentForFilter}
        placeholder="To $"
        labelName="Price/ 1 hour"
        labelWidth={125}
      />
      <SelectForFilter
        data={valueAndLabelmileageCarsFilter}
        placeholder="From"
        labelName="Сar mileage / km"
        labelWidth={160}
      />
      <SelectForFilter
        data={valueAndLabelmileageCarsFilter}
        placeholder="To"
        labelName=""
        labelWidth={160}
      />
      <Button text={'Search'} />
    </FilterWrapper>
  );
};

export default Filter;
