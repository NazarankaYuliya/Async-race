import { createReducer, on } from "@ngrx/store";
import { winnersState } from "./winners.state";
import { loadWinnersFail, loadWinnersSuccess, setOrder, setPage, setSort } from "./winners.actions";

export const winnersReducer = createReducer(
    winnersState,
    on(loadWinnersSuccess, (state, { winners, totalCount }) => ({
        ...state,
        winners: winners,
        totalCount: totalCount,
        loading: false,
        error: "",
    })),
    on(loadWinnersFail, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    })),
    on(setPage, (state, { page }) => ({
        ...state,
        page,
    })),
    on(setSort, (state, { sort }) => ({
        ...state,
        sort,
    })),
    on(setOrder, (state, { order }) => ({
        ...state,
        order,
    })),
);
