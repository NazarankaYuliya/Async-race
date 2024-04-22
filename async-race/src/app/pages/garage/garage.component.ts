import { Component, OnInit } from "@angular/core";

import { CarsListComponent } from "../../components/cars-list/cars-list.component";
import { Car } from "../../models/garage.interfaces";
import { GarageService } from "../../services/garage-service.service";
import { DEFAULT_NUMBER_OF_NEW_CARS, DEFAULT_PAGE, DEFAULT_PAGE_SIZE, ZERO } from "../../shared/constants";
import { generateRandomCars } from "../../utils/random-car-generator";

@Component({
    selector: "app-garage",
    standalone: true,
    imports: [CarsListComponent],
    templateUrl: "./garage.component.html",
    styleUrl: "./garage.component.scss",
})
export class GarageComponent implements OnInit {
    cars: Car[] = [];
    totalCars: number = ZERO;
    currentPage: number = DEFAULT_PAGE;
    pageSize: number = DEFAULT_PAGE_SIZE;
    totalPages: number = ZERO;

    constructor(private garageService: GarageService) {}

    ngOnInit(): void {
        this.getCars();
    }

    getCars(): void {
        this.garageService.getCars(this.currentPage, this.pageSize).subscribe((res) => {
            if (res.cars && res.totalCount) {
                this.cars = res.cars;
                this.totalCars = +res.totalCount;
                this.calculateTotalPages();
            }
        });
    }

    calculateTotalPages(): void {
        this.totalPages = Math.ceil(this.totalCars / this.pageSize);
    }

    goToPage(page: number): void {
        if (page >= DEFAULT_PAGE && page <= this.totalPages) {
            this.currentPage = page;
            this.getCars();
        }
    }

    goToFirstPage(): void {
        this.goToPage(DEFAULT_PAGE);
    }

    goToLastPage(): void {
        this.goToPage(this.totalPages);
    }

    goToPreviousPage(): void {
        if (this.currentPage > DEFAULT_PAGE) {
            this.currentPage = -1;
            this.getCars();
        }
    }

    goToNextPage(): void {
        if (this.currentPage < this.totalPages) {
            this.currentPage += 1;
            this.getCars();
        }
    }

    createRandomCars(): void {
        const newCars = generateRandomCars(DEFAULT_NUMBER_OF_NEW_CARS);
        newCars.forEach((newcar) => {
            this.garageService.createCar(newcar).subscribe((res) => {
                if (res) this.getCars();
            });
        });
    }
}
