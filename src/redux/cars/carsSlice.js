import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars } from './operations';
import isEqual from 'lodash/isEqual';

const carsInitialValue = {
  isLoading: false,
  error: null,
  allCars: [],
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
};

const cars = createSlice({
  name: 'cars',
  initialState: carsInitialValue,
  extraReducers: builder => {
    builder.addCase(fetchAllCars.pending, handlePending);
    builder.addCase(fetchAllCars.fulfilled, (state, { payload }) => {
      handleFulfilled(state, payload);
      if (!isEqual(state.allCars, payload)) {
        state.allCars.push(...payload);
      }
    });
    builder.addCase(fetchAllCars.rejected, handleRejected);
  },
});

export const carsReducer = cars.reducer;
