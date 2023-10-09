import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65202e35906e276284c4257f.mockapi.io';

const fetchAllCars = createAsyncThunk(
  'cars/fetchAllCars',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/cars`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      if (state.cars.allCars.length > 1) {
        return false;
      }
    },
  }
);

export { fetchAllCars };
