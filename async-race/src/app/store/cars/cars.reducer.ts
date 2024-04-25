import { createReducer, on } from "@ngrx/store";

import { loadCarsFail, loadCarsSuccess, selectCar } from "./cars.actions";
import { carsState } from "./cars.state";

const _carsReducer = createReducer(
    carsState,
    on(loadCarsSuccess, (state, action) => ({
        ...state,
        cars: action.cars,
        totalCount: action.totalCount,
        errorMessage: "",
    })),
    on(loadCarsFail, (state, action) => ({
        ...state,
        cars: [],
        totalCount: "0",
        errorMessage: action.errorMessage,
    })),
    on(selectCar, (state, { selectedCar }) => ({
        ...state,
        selectedCar,
    })),
);

export function CarsReducer(state: any, action: any) {
    return _carsReducer(state, action);
}
