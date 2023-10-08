import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const carsInitialValue = { items: [], isLoading: false, erorr: null };

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
  state.items = payload;
};

const cars = createSlice({
  name: 'cars',
  initialState: carsInitialValue,
  extraReducers: {
    [fetchCars.pending]: handlePending,
    [fetchCars.fulfilled]: handleFulfilled,
    [fetchCars.rejected]: handleRejected,
  },
});

export const carsReducer = cars.reducer;
