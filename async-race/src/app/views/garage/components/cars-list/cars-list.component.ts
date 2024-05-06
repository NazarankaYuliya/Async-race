import { Component, Input } from '@angular/core';

import { Car } from '../../../../models/garage.interfaces';
import { CarComponent } from '../car/car.component';

@Component({
    selector: 'app-cars-list',
    standalone: true,
    imports: [CarComponent],
    templateUrl: './cars-list.component.html',
    styleUrl: './cars-list.component.scss',
})
export class CarsListComponent {
    @Input() cars: Car[] = [];
}
