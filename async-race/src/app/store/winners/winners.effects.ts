import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, withLatestFrom } from "rxjs/operators";
import { WinnersService } from "../../services/winners-service.service";
import { loadWinners, loadWinnersFail, loadWinnersSuccess } from "./winners.actions";
import { Store, select } from "@ngrx/store";
import { selectLimit, selectOrder, selectPage, selectSort } from "./winners.selectors";

@Injectable()
export class WinnersEffects {
    constructor(
        private actions$: Actions,
        private winnersService: WinnersService,
        private store: Store,
    ) {}

    loadWinners$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadWinners),
            withLatestFrom(
                this.store.pipe(select(selectPage)),
                this.store.pipe(select(selectLimit)),
                this.store.pipe(select(selectSort)),
                this.store.pipe(select(selectOrder)),
            ),
            mergeMap(([action, page, limit, sort, order]) =>
                this.winnersService.getWinners(page, limit, sort, order).pipe(
                    map(({ winners, totalCount }) =>
                        loadWinnersSuccess({ winners: winners || [], totalCount: totalCount }),
                    ),
                    catchError((error) => of(loadWinnersFail({ error }))),
                ),
            ),
        ),
    );
}
