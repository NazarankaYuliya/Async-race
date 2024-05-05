import { Component, Input } from "@angular/core";

import { Car } from "../../../../models/garage.interfaces";
import { MoveService } from "../../../../services/move.service";

@Component({
    selector: "app-reset-button",
    standalone: true,
    imports: [],
    templateUrl: "./reset-button.component.html",
    styleUrl: "./reset-button.component.scss",
})
export class ResetButtonComponent {
    @Input() cars: Car[] = [];
    constructor(private service: MoveService) {}

    resetRace() {
        this.service.resetMovingForAll(this.cars);
    }
}
