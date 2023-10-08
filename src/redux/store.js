import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './cars/filterSlice';
import { carsReducer } from './cars/carsSlice';

const rootReducer = combineReducers({
  cars: carsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
