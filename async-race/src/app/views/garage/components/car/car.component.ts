import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";

import { Car } from "../../../../models/garage.interfaces";
import { deleteCar, selectCar } from "../../../../store/cars/cars.actions";
import { SelectButtonComponent } from "../select-button/select-button.component";
import { RemoveButtonComponent } from "../remove-button/remove-button.component";
import { CommonModule } from "@angular/common";
import { MoveService } from "../../../../services/move.service";

@Component({
    selector: "app-car",
    standalone: true,
    imports: [SelectButtonComponent, RemoveButtonComponent, CommonModule],
    templateUrl: "./car.component.html",
    styleUrl: "./car.component.scss",
})
export class CarComponent {
    @Input() car: Car | undefined;
    selectedCar: boolean = false;
    isMoving: boolean = false;
    errorMessage: string | null = null;

    constructor(
        private store: Store,
        private service: MoveService,
    ) {}

    onRemove(id: number) {
        this.store.dispatch(deleteCar({ carID: id }));
    }

    onSelect(car: Car) {
        this.selectedCar = !this.selectedCar;
        if (this.selectedCar) {
            this.store.dispatch(selectCar({ selectedCar: car }));
        } else {
            this.store.dispatch(selectCar({ selectedCar: null }));
        }
    }

    startMoving(car: Car) {
        this.isMoving = true;
        this.service.startMoving(car);
    }

    stopMoving(car: Car) {
        this.service.stopMoving(car);
        this.isMoving = false;
    }
}
