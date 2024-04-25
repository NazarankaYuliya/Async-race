import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, merge, mergeMap, of } from "rxjs";

import { GarageService } from "../../services/garage-service.service";
import { PageSarviceService } from "../../services/page-sarvice.service";
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
} from "./cars.actions";

@Injectable()
export class CarsEffects {
    constructor(
        private action$: Actions,
        private service: GarageService,
        private pageSarvice: PageSarviceService,
    ) {}

    loadCars$ = createEffect(() =>
        this.action$.pipe(
            ofType(loadCars),
            mergeMap((action) =>
                this.service.getCars(action.page, action.pageSize).pipe(
                    map((data) => loadCarsSuccess({ cars: data.cars || [], totalCount: data.totalCount })),
                    catchError((err) => of(loadCarsFail({ errorMessage: err.message }))),
                ),
            ),
        ),
    );

    createCar$ = createEffect(() =>
        this.action$.pipe(
            ofType(createCar),
            mergeMap((action) =>
                this.service.createCar(action.carData).pipe(
                    map((data) => createCarSuccess({ car: data })),
                    catchError(() => EMPTY),
                ),
            ),
        ),
    );

    updateCar$ = createEffect(() =>
        this.action$.pipe(
            ofType(updateCar),
            mergeMap((action) =>
                this.service.updateCar(action.carID, action.carData).pipe(
                    map((data) => createCarSuccess({ car: data })),
                    catchError(() => EMPTY),
                ),
            ),
        ),
    );

    deleteCar$ = createEffect(() =>
        this.action$.pipe(
            ofType(deleteCar),
            mergeMap((action) =>
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
        ).pipe(
            mergeMap(() => {
                const currentPage = this.pageSarvice.getCurrentPage();
                const pageSize = this.pageSarvice.getPageSize();
                return of(loadCars({ page: currentPage, pageSize }));
            }),
        ),
    );
}
