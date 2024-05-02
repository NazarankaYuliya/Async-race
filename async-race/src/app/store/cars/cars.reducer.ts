import { createReducer, on } from "@ngrx/store";

import { loadCarsFail, loadCarsSuccess, selectCar, setPage } from "./cars.actions";
import { carsState } from "./cars.state";

export const carsReducer = createReducer(
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
    on(setPage, (state, { page }) => ({
        ...state,
        page,
    })),
);
