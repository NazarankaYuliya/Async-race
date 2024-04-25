import { createAction, props } from "@ngrx/store";

import { Car } from "../../models/garage.interfaces";

export const LOAD_CARS = "[Cars] load cars";
export const LOAD_CARS_SUCCESS = "[Cars] load cars success";
export const LOAD_CARS_FAIL = "[Cars] load cars fail";

export const CREATE_CAR = "[Car] create car";
export const CREATE_CAR_SUCCESS = "[Car] create car success";

export const UPDATE_CAR = "[Car] update car";
export const UPDATE_CAR_SUCCESS = "[Car] update car success";

export const DELETE_CAR = "[Car] delete car";
export const DELETE_CAR_SUCCESS = "[Car] delete car success";

export const SELECT_CAR = "[Car] select car";

export const loadCars = createAction(LOAD_CARS, props<{ page: number; pageSize: number }>());
export const loadCarsSuccess = createAction(LOAD_CARS_SUCCESS, props<{ cars: Car[]; totalCount: string }>());
export const loadCarsFail = createAction(LOAD_CARS_FAIL, props<{ errorMessage: string }>());

export const createCar = createAction(CREATE_CAR, props<{ carData: { name: string; color: string } }>());
export const createCarSuccess = createAction(CREATE_CAR_SUCCESS, props<{ car: Car }>());

export const updateCar = createAction(UPDATE_CAR, props<{ carID: number; carData: { name: string; color: string } }>());
export const updateCarSuccess = createAction(UPDATE_CAR_SUCCESS, props<{ car: Car }>());

export const deleteCar = createAction(DELETE_CAR, props<{ carID: number }>());
export const deleteCarSuccess = createAction(DELETE_CAR_SUCCESS);

export const selectCar = createAction(SELECT_CAR, props<{ selectedCar: Car | null }>());
