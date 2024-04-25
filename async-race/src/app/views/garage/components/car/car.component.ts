import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";

import { Car } from "../../../../models/garage.interfaces";
import { deleteCar, selectCar } from "../../../../store/cars/cars.actions";
import { SelectButtonComponent } from "../select-button/select-button.component";
import { RemoveButtonComponent } from "../remove-button/remove-button.component";

@Component({
    selector: "app-car",
    standalone: true,
    imports: [SelectButtonComponent, RemoveButtonComponent],
    templateUrl: "./car.component.html",
    styleUrl: "./car.component.scss",
})
export class CarComponent {
    @Input() car: Car | undefined;
    selectedCar: boolean = false;

    constructor(private store: Store) {}

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

    startMoving() {}

    stopMoving() {}
}
