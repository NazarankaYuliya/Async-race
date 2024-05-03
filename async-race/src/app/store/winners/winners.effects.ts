import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { EMPTY, merge, of } from "rxjs";
import {
 catchError, map, mergeMap, withLatestFrom 
} from "rxjs/operators";

import { GarageService } from "../../services/garage-service.service";
import { WinnersService } from "../../services/winners-service.service";
import {
    createWinner,
    createWinnerSuccess,
    deleteWinner,
    deleteWinnerSuccess,
    loadWinners,
    loadWinnersFail,
    loadWinnersSuccess,
    updateWinner,
    updateWinnerSuccess,
} from "./winners.actions";
import {
 selectLimit, selectOrder, selectPage, selectSort 
} from "./winners.selectors";

@Injectable()
export class WinnersEffects {
    constructor(
        private action$: Actions,
        private service: WinnersService,
        private garageService: GarageService,
        private store: Store,
    ) {}

    loadWinners$ = createEffect(() =>
        this.action$.pipe(
        ofType(loadWinners),
        withLatestFrom(
            this.store.pipe(select(selectPage)),
            this.store.pipe(select(selectLimit)),
            this.store.pipe(select(selectSort)),
            this.store.pipe(select(selectOrder)),
        ),
        mergeMap(([action, page, limit, sort, order]) =>
                this.service.getWinners(page, limit, sort, order).pipe(
            map(({ winners, totalCount }) => loadWinnersSuccess({ winners: winners || [], totalCount })),
            catchError((error) => of(loadWinnersFail({ error }))),
        ),
            ),
    ),
    );

    createWinner$ = createEffect(() =>
        this.action$.pipe(
        ofType(createWinner),
        mergeMap((action) =>
                this.service.createWinner(action.winner).pipe(
            withLatestFrom(this.garageService.getCarById(action.winner.id)),
            mergeMap(([data, car]) =>
                        of(createWinnerSuccess({ winner: data, car })).pipe(catchError(() => EMPTY)),
                    ),
        ),
            ),
    ),
    );

    updateWinner$ = createEffect(() =>
        this.action$.pipe(
        ofType(updateWinner),
        mergeMap((action) =>
                this.service.updateWinner(action.winnerID, action.winnerData).pipe(
            map((data) => updateWinnerSuccess({ winner: data })),
            catchError(() => EMPTY),
        ),
            ),
    ),
    );

    deleteWinner$ = createEffect(() =>
        this.action$.pipe(
        ofType(deleteWinner),
        mergeMap((action) =>
                this.service.deleteWinner(action.winnerID).pipe(
            map(() => deleteWinnerSuccess()),
            catchError(() => EMPTY),
        ),
            ),
    ),
    );

    loadWinnersAfterCreateOrUpdateOrDelete$ = createEffect(() =>
        merge(
        this.action$.pipe(ofType(createWinnerSuccess)),
        this.action$.pipe(ofType(deleteWinnerSuccess)),
        this.action$.pipe(ofType(updateWinnerSuccess)),
    ).pipe(mergeMap(() => of(loadWinners()))),
    ),);
}
