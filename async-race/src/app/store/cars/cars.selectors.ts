import { createFeatureSelector, createSelector } from "@ngrx/store";

import { CarsModel } from "./cars.state";

const getCarsState = createFeatureSelector<CarsModel>("cars");

export const getCarsList = createSelector(getCarsState, (state) => state.cars);
export const getTotalCount = createSelector(getCarsState, (state) => state.totalCount);

export const getSelectedCar = createSelector(getCarsState, (state) => state.selectedCar);

export const selectPage = createSelector(getCarsState, (state) => state.page);

export const selectLimit = createSelector(getCarsState, (state) => state.limit);
