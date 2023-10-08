import { createSelector } from '@reduxjs/toolkit';

export const getCars = state => state.cars.items;

export const getIsLoading = state => state.cars.isLoading;

export const getError = state => state.cars.error;

export const getIdFavorites = state => state.favorites;

export const getFavoritesCars = createSelector(
  [getCars, getIdFavorites],
  (cars, favoriteId) => {
    return cars.filter(car => favoriteId.includes(car.id));
  }
);

export const getFilterValue = state => state.filter;
