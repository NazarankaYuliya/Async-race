import { createReducer, on } from "@ngrx/store";

import { isMoving, loadCarsFail, loadCarsSuccess, selectCar, setPage } from "./cars.actions";
import { carsState } from "./cars.state";
import { selectIsMoving } from "./cars.selectors";

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
    on(isMoving, (state, { isMoving }) => ({
        ...state,
        isMoving,
    })),

    on(setPage, (state, { page }) => ({
        ...state,
        page,
    })),
);
