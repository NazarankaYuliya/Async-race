import { createAction, props } from "@ngrx/store";

export const updateCreateCarForm = createAction(
    "[Form] Update Create Car Form",
    props<{ name: string; color: string }>(),
);

export const updateUpdateCarForm = createAction(
    "[Form] Update Update Car Form",
    props<{ name: string; color: string }>(),
);
