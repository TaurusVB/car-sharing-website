import { createSelector } from '@reduxjs/toolkit';
import { getCars } from 'redux/cars/selectors';

export const getIdFavorites = state => state.favorites;

export const getFavoritesCars = createSelector(
  [getCars, getIdFavorites],
  (cars, favoriteId) => {
    return cars.filter(car => favoriteId.includes(car.id));
  }
);
