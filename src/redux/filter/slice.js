import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  carBrand: '',
  price: null,
  mileageFrom: null,
  mileageTo: null,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setStatusFilter: (state, { payload }) => {
      state.carBrand = payload.carBrand;
      state.price = payload.price;
      state.mileageFrom = payload.mileageFrom;
      state.mileageTo = payload.mileageTo;
    },
    resetStatusFilter: state => {
      state.carBrand = '';
      state.price = 0;
      state.mileageFrom = 0;
      state.mileageTo = 999999;
    },
  },
});
export const { setStatusFilter, resetStatusFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
