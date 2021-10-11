import { createSelector } from 'reselect';
import { AppRootState } from '../../../typings/car';

const selectHomePage = (state: AppRootState) => state.homePage;

export const makeSelectTopCars = createSelector(
  selectHomePage,
  (homePage) => homePage.topCars
);
