import { createAction, props } from "@ngrx/store";

import { Car } from "../../models/garage.interfaces";

export const loadCars = createAction("[Cars] load cars");
export const loadCarsSuccess = createAction("[Cars] load cars success", props<{ cars: Car[]; totalCount: string }>());
export const loadCarsFail = createAction("[Cars] load cars fail", props<{ errorMessage: string }>());

export const createCar = createAction("[Car] create car", props<{ carData: { name: string; color: string } }>());
export const createCarSuccess = createAction("[Car] create car success", props<{ car: Car }>());

export const updateCar = createAction(
    "[Car] update car",
    props<{ carID: number; carData: { name: string; color: string } }>(),
);
export const updateCarSuccess = createAction("[Car] update car success", props<{ car: Car }>());

export const deleteCar = createAction("[Car] delete car", props<{ carID: number }>());
export const deleteCarSuccess = createAction("[Car] delete car success");

export const selectCar = createAction("[Car] select car", props<{ selectedCar: Car | null }>());

export const setPage = createAction("[Cars] Set Page", props<{ page: number }>());
