import { createSelector, createFeatureSelector } from "@ngrx/store";
import { WinnersState } from "./winners.state";

export const selectWinnersState = createFeatureSelector<WinnersState>("winners");

export const selectWinners = createSelector(selectWinnersState, (state) => state.winners);

export const selectTotalCount = createSelector(selectWinnersState, (state) => state.totalCount);

export const selectPage = createSelector(selectWinnersState, (state) => state.page);

export const selectLimit = createSelector(selectWinnersState, (state) => state.limit);

export const selectSort = createSelector(selectWinnersState, (state) => state.sort);

export const selectOrder = createSelector(selectWinnersState, (state) => state.order);

export const selectLoading = createSelector(selectWinnersState, (state) => state.loading);

export const selectError = createSelector(selectWinnersState, (state) => state.error);
