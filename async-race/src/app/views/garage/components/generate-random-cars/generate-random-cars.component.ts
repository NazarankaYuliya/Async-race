import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { DEFAULT_NUMBER_OF_NEW_CARS } from '../../../../shared/constants';
import { createCar } from '../../../../store/cars/cars.actions';
import { generateRandomCars } from '../../../../utils/random-car-generator';

@Component({
    selector: 'app-generate-random-cars',
    standalone: true,
    imports: [],
    templateUrl: './generate-random-cars.component.html',
    styleUrl: './generate-random-cars.component.scss',
})
export class GenerateRandomCarsComponent {
    constructor(private store: Store) {}

    createRandomCars(): void {
        const newCars = generateRandomCars(DEFAULT_NUMBER_OF_NEW_CARS);
        newCars.forEach((newcar: { name: string; color: string }) => {
            this.store.dispatch(createCar({ carData: newcar }));
        });
    }
}
