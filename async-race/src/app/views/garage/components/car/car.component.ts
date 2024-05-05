import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";

import { Car } from "../../../../models/garage.interfaces";
import { MoveService } from "../../../../services/move.service";
import { CarImageComponent } from "../../../../shared/components/car-image/car-image.component";
import { deleteCar, selectCar } from "../../../../store/cars/cars.actions";
import { deleteWinner } from "../../../../store/winners/winners.actions";
import { RemoveButtonComponent } from "../remove-button/remove-button.component";
import { SelectButtonComponent } from "../select-button/select-button.component";

@Component({
    selector: "app-car",
    standalone: true,
    imports: [SelectButtonComponent, RemoveButtonComponent, CommonModule, CarImageComponent],
    templateUrl: "./car.component.html",
    styleUrl: "./car.component.scss",
})
export class CarComponent {
    @Input() car: Car | undefined;
    selectedCar: boolean = false;
    isMoving$: Observable<boolean> = of(false);
    errorMessage: string | null = null;

    constructor(
        private store: Store,
        private service: MoveService,
    ) {}

    onRemove(id: number) {
        this.store.dispatch(deleteCar({ carID: id }));
        this.store.dispatch(deleteWinner({ winnerID: id }));
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
        this.service.startMoving(car);
    }

    stopMoving(car: Car) {
        this.service.resetMoving(car);
    }
}
