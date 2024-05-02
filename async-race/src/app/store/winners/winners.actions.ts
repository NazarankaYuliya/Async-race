import { createAction, props } from "@ngrx/store";
import { Winner } from "../../models/winners.interfaces";

export const loadWinners = createAction("[Winners] Load Winners");
export const loadWinnersSuccess = createAction(
    "[Winners] Load Winners Success",
    props<{ winners: Winner[]; totalCount: string }>(),
);
export const loadWinnersFail = createAction("[Winners] Load Winners Failure", props<{ error: any }>());
export const setPage = createAction("[Winners] Set Page", props<{ page: number }>());
export const setSort = createAction("[Winners] Set Sort", props<{ sort: string }>());
export const setOrder = createAction("[Winners] Set Order", props<{ order: string }>());
