import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';
import isEqual from 'lodash/isEqual';

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
  if (!isEqual(state.items, payload)) {
    state.items.push(...payload);
  }
  if (payload.length === 0) {
    state.error = 'No cars found';
  }
};

const cars = createSlice({
  name: 'cars',
  initialState: carsInitialValue,
  extraReducers: builder => {
    builder.addCase(fetchCars.pending, handlePending);
    builder.addCase(fetchCars.fulfilled, handleFulfilled);
    builder.addCase(fetchCars.rejected, handleRejected);
  },
});

export const carsReducer = cars.reducer;
