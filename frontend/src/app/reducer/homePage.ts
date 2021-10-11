import { createSlice } from '@reduxjs/toolkit';
import { homePageState } from '../../typings/car';

const initialState: homePageState = {
  topCars: [],
};

const homePage = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setTopCars: (state, action) => {
      state.topCars = action.payload;
    },
  },
});

export const { setTopCars } = homePage.actions;

export default homePage.reducer;
