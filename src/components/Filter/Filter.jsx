import React, { useState } from 'react';
import SelectForFilter from 'components/SelectForFilter/SelectForFilter';
import { FilterWrapper } from './Filter.styled';
import carsBrand from 'data/carsBrand';
import valueAndLabelPriceRentForFilter from 'utils/getAvailablePriceRent';
import valueAndLabelmileageCarsFilter from 'utils/getMileageOfCars';
import Button from 'components/Button/Button';
import { getCars } from 'redux/cars/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filter/slice';

const Filter = () => {
  const [carBrand, setCarBrand] = useState('');
  const [price, setPrice] = useState(0);
  const [mileageFrom, setMileageFrom] = useState(0);
  const [mileageTo, setMileageTo] = useState(999999);

  const dispatch = useDispatch();

  const cars = useSelector(getCars);

  const mileageForFilter = (arr, sep) => {
    return arr.map(item => {
      return { value: item.value, label: `${sep} ${item.label}` };
    });
  };

  const handleFilterSubmit = async e => {
    e.preventDefault();
    dispatch(
      setStatusFilter({
        carBrand: carBrand?.label || '',
        price: price?.value || price,
        mileageFrom: mileageFrom?.value || mileageFrom,
        mileageTo: mileageTo?.value || mileageTo,
      })
    );
  };

  return (
    <FilterWrapper onSubmit={handleFilterSubmit}>
      <SelectForFilter
        data={carsBrand}
        placeholder="Enter the text"
        labelName="Car brand"
        labelWidth={224}
        value={carBrand}
        onChange={setCarBrand}
      />
      <SelectForFilter
        data={valueAndLabelPriceRentForFilter(cars)}
        placeholder="To $"
        labelName="Price / 1 hour"
        labelWidth={130}
        value={price}
        onChange={setPrice}
      />
      <SelectForFilter
        data={mileageForFilter(valueAndLabelmileageCarsFilter(cars), 'From ')}
        placeholder="From"
        labelName="Сar mileage / km"
        labelWidth={160}
        value={mileageFrom}
        onChange={setMileageFrom}
      />
      <SelectForFilter
        data={mileageForFilter(valueAndLabelmileageCarsFilter(cars), 'To ')}
        placeholder="To"
        labelName=""
        labelWidth={160}
        value={mileageTo}
        onChange={setMileageTo}
      />
      <Button text={'Search'} />
    </FilterWrapper>
  );
};

export default Filter;
