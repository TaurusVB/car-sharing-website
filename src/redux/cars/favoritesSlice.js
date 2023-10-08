import { createSlice } from '@reduxjs/toolkit';

const favoritesInitialState = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesInitialState,
  reducers: {
    toggleIdInArray(state, { payload }) {
      const index = state.indexOf(payload);
      if (index === -1) {
        return [...state, payload];
      } else {
        return state.filter(item => item !== payload);
      }
    },
  },
});

export const { toggleIdInArray } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
