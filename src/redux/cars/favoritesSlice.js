import { createSlice } from '@reduxjs/toolkit';
import toastifyMessage from 'utils/toastifyMessage';

const favoritesInitialState = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesInitialState,
  reducers: {
    toggleIdInArray(state, { payload }) {
      const index = state.indexOf(payload);
      if (index === -1) {
        toastifyMessage(
          'You have successfully added the car to your favorites! 🚗'
        );
        return [...state, payload];
      } else {
        toastifyMessage(
          'You have successfully delete the car from your favorites! ❌'
        );
        return state.filter(item => item !== payload);
      }
    },
  },
});

export const { toggleIdInArray } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
