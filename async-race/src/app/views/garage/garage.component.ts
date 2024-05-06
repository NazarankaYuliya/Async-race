import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Car } from '../../models/garage.interfaces';
import { MoveService } from '../../services/move.service';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { DEFAULT_PAGE } from '../../shared/constants';
import { loadCars, setPage } from '../../store/cars/cars.actions';
import {
    getCarsList,
    getTotalCount,
    selectLimit,
    selectPage,
} from '../../store/cars/cars.selectors';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { GenerateRandomCarsComponent } from './components/generate-random-cars/generate-random-cars.component';
import { RaceButtonComponent } from './components/race-button/race-button.component';
import { ResetButtonComponent } from './components/reset-button/reset-button.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';

@Component({
    selector: 'app-garage',
    standalone: true,
    imports: [
        CommonModule,
        CarsListComponent,
        CreateCarComponent,
        UpdateCarComponent,
        GenerateRandomCarsComponent,
        PaginationComponent,
        RaceButtonComponent,
        ResetButtonComponent,
    ],
    templateUrl: './garage.component.html',
    styleUrl: './garage.component.scss',
})
export class GarageComponent implements OnInit {
    cars$!: Observable<Car[]>;

    totalCars$!: Observable<string>;

    currentPage$!: Observable<number>;

    pageSize$!: Observable<number>;

    totalPages!: number;

    constructor(
        private store: Store,
        private moveService: MoveService,
    ) {}

    ngOnInit(): void {
        this.getCars();
    }

    getCars(): void {
        this.store.dispatch(loadCars());
        this.cars$ = this.store.select(getCarsList);
        this.totalCars$ = this.store.select(getTotalCount);
        this.currentPage$ = this.store.select(selectPage);
        this.pageSize$ = this.store.select(selectLimit);
        this.totalCars$.subscribe(count => {
            this.calculateTotalPages(+count);
        });
    }

    calculateTotalPages(totalCars: number): void {
        this.pageSize$.subscribe(pageSize => {
            this.totalPages = Math.ceil(totalCars / pageSize);
        });
    }

    goToPage(page: number): void {
        if (page >= DEFAULT_PAGE && page <= this.totalPages) {
            this.store.dispatch(setPage({ page }));
            this.getCars();
        }
    }
}
