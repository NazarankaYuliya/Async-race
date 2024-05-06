import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import {
    catchError,
    EMPTY,
    map,
    merge,
    mergeMap,
    of,
    withLatestFrom,
} from 'rxjs';

import { GarageService } from '../../services/garage-service.service';
import {
    createCar,
    createCarSuccess,
    deleteCar,
    deleteCarSuccess,
    loadCars,
    loadCarsFail,
    loadCarsSuccess,
    updateCar,
    updateCarSuccess,
} from './cars.actions';
import { selectLimit, selectPage } from './cars.selectors';

@Injectable()
export class CarsEffects {
    constructor(
        private action$: Actions,
        private service: GarageService,
        private store: Store,
    ) {}

    loadCars$ = createEffect(() =>
        this.action$.pipe(
            ofType(loadCars),
            withLatestFrom(
                this.store.pipe(select(selectPage)),
                this.store.pipe(select(selectLimit)),
            ),
            mergeMap(([, page, limit]) =>
                this.service.getCars(page, limit).pipe(
                    map(data =>
                        loadCarsSuccess({
                            cars: data.cars || [],
                            totalCount: data.totalCount,
                        }),
                    ),
                    catchError(err =>
                        of(loadCarsFail({ errorMessage: err.message })),
                    ),
                ),
            ),
        ),
    );

    createCar$ = createEffect(() =>
        this.action$.pipe(
            ofType(createCar),
            mergeMap(action =>
                this.service.createCar(action.carData).pipe(
                    map(data => createCarSuccess({ car: data })),
                    catchError(() => EMPTY),
                ),
            ),
        ),
    );

    updateCar$ = createEffect(() =>
        this.action$.pipe(
            ofType(updateCar),
            mergeMap(action =>
                this.service.updateCar(action.carID, action.carData).pipe(
                    map(data => createCarSuccess({ car: data })),
                    catchError(() => EMPTY),
                ),
            ),
        ),
    );

    deleteCar$ = createEffect(() =>
        this.action$.pipe(
            ofType(deleteCar),
            mergeMap(action =>
                this.service.deleteCar(action.carID).pipe(
                    map(() => deleteCarSuccess()),
                    catchError(() => EMPTY),
                ),
            ),
        ),
    );

    loadCarsAfterCreateOrUpdateOrDelete$ = createEffect(() =>
        merge(
            this.action$.pipe(ofType(createCarSuccess)),
            this.action$.pipe(ofType(deleteCarSuccess)),
            this.action$.pipe(ofType(updateCarSuccess)),
        ).pipe(mergeMap(() => of(loadCars()))),
    );
}
