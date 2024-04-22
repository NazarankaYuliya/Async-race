import { Component, Input } from "@angular/core";

import { Car } from "../../models/garage.interfaces";

@Component({
    selector: "app-car",
    standalone: true,
    imports: [],
    templateUrl: "./car.component.html",
    styleUrl: "./car.component.scss",
})
export class CarComponent {
    @Input() car: Car | undefined;
}
