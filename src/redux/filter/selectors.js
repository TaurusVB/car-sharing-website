import { createSelector } from '@reduxjs/toolkit';
import { getCars } from 'redux/cars/selectors';

export const getFilterValues = state => state.filter;

export const getFilterValueMinMileage = state => state.filter.mileageFrom;

export const getFilterValueMaxMileage = state => state.filter.mileageTo;

export const getFilteredCars = createSelector(
  [getFilterValues, getCars],
  (filterValues, cars) => {
    return cars.filter(car => {
      return (
        (filterValues.carBrand === '' || car.make === filterValues.carBrand) &&
        (filterValues.price === 0 ||
          +car.rentalPrice.substring(1) <= filterValues.price) &&
        car.mileage >= filterValues.mileageFrom &&
        car.mileage <= filterValues.mileageTo
      );
    });
  }
);
