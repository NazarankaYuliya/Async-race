import { createAction, props } from '@ngrx/store';

import { Car } from '../../models/garage.interfaces';
import { Winner } from '../../models/winners.interfaces';

export const loadWinners = createAction('[Winners] Load Winners');
export const loadWinnersSuccess = createAction(
    '[Winners] load winners success',
    props<{ winners: Winner[]; totalCount: string }>(),
);
export const loadWinnersFail = createAction(
    '[Winners] load winners fail',
    props<{ error: string }>(),
);
export const setPage = createAction(
    '[Winners] set page',
    props<{ page: number }>(),
);
export const setSort = createAction(
    '[Winners] set sort',
    props<{ sort: string }>(),
);
export const setOrder = createAction(
    '[Winners] set order',
    props<{ order: string }>(),
);

export const createWinner = createAction(
    '[Winner] create winner',
    props<{ winner: Winner }>(),
);

export const createWinnerSuccess = createAction(
    '[Winner] create winner success',
    props<{ winner: Winner; car: Car }>(),
);

export const updateWinner = createAction(
    '[Winner] update winner',
    props<{ winnerID: number; winnerData: { wins: number; time: number } }>(),
);
export const updateWinnerSuccess = createAction(
    '[Winner] update winner success',
    props<{ winner: Winner }>(),
);

export const deleteWinner = createAction(
    '[Winner] delete winner',
    props<{ winnerID: number }>(),
);
export const deleteWinnerSuccess = createAction(
    '[Winner] delete winner success',
);
