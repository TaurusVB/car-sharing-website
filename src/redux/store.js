import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './cars/filterSlice';
import { carsReducer } from './cars/carsSlice';
import { favoritesReducer } from './cars/favoritesSlice';

const rootReducer = combineReducers({
  cars: carsReducer,
  favorites: favoritesReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
