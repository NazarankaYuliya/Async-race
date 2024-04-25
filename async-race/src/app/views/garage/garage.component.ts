import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { CarsListComponent } from "./components/cars-list/cars-list.component";
import { CreateCarComponent } from "./components/create-car/create-car.component";
import { UpdateCarComponent } from "./components/update-car/update-car.component";
import { Car } from "../../models/garage.interfaces";
import { PageSarviceService } from "../../services/page-sarvice.service";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, ZERO } from "../../shared/constants";
import { loadCars } from "../../store/cars/cars.actions";
import { getCarsList, getTotalCount } from "../../store/cars/cars.selectors";
import { GenerateRandomCarsComponent } from "./components/generate-random-cars/generate-random-cars.component";
import { PaginationComponent } from "./components/pagination/pagination.component";

@Component({
    selector: "app-garage",
    standalone: true,
    imports: [
        CarsListComponent,
        CreateCarComponent,
        UpdateCarComponent,
        GenerateRandomCarsComponent,
        PaginationComponent,
    ],
    templateUrl: "./garage.component.html",
    styleUrl: "./garage.component.scss",
})
export class GarageComponent implements OnInit {
    cars: Car[] = [];
    totalCars: number = ZERO;
    currentPage: number = DEFAULT_PAGE;
    pageSize: number = DEFAULT_PAGE_SIZE;
    totalPages: number = ZERO;

    constructor(
        private store: Store,
        private pageService: PageSarviceService,
    ) {}

    ngOnInit(): void {
        this.currentPage = this.pageService.getCurrentPage();
        this.pageSize = this.pageService.getPageSize();
        this.getCars();
    }

    getCars(): void {
        this.store.dispatch(loadCars({ page: this.currentPage, pageSize: this.pageSize }));
        this.store.select(getCarsList).subscribe((cars) => {
            this.cars = cars;
        });
        this.store.select(getTotalCount).subscribe((count) => {
            this.totalCars = +count;
            this.calculateTotalPages();
        });
    }

    calculateTotalPages(): void {
        this.totalPages = Math.ceil(this.totalCars / this.pageSize);
    }

    goToPage(page: number): void {
        if (page >= DEFAULT_PAGE && page <= this.totalPages) {
            this.currentPage = page;
            this.pageService.setCurrentPage(page);
            this.getCars();
        }
    }
}
