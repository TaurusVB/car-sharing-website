import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65202e35906e276284c4257f.mockapi.io';

const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await axios.get(`/cars?page=${page}&limit=8`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  // {
  //   condition: (_, { getState }) => {
  //     const state = getState();
  //     if (state.cars.items.length > 1) {
  //       return false;
  //     }
  //   },
  // }
);

export { fetchCars };
