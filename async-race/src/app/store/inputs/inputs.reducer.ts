import { createReducer, on } from "@ngrx/store";

import { updateCreateCarForm, updateUpdateCarForm } from "./inputs.action";
import { initialCreateFormState, initialUpdateFormState } from "./inputs.state";

export const createFormReducer = createReducer(
    initialCreateFormState,
    on(updateCreateCarForm, (state, { name, color }) => ({
        ...state,
        createCarForm: { name, color },
    })),
);

export const updateFormReducer = createReducer(
    initialUpdateFormState,
    on(updateUpdateCarForm, (state, { name, color }) => ({
        ...state,
        updateCarForm: { name, color },
    })),
);
