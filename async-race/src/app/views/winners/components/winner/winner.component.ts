import { Component, Input, OnInit } from "@angular/core";

import { Car } from "../../../../models/garage.interfaces";
import { Winner } from "../../../../models/winners.interfaces";
import { GarageService } from "../../../../services/garage-service.service";
import { CarImageComponent } from "../../../../shared/components/car-image/car-image.component";

@Component({
    selector: "app-winner",
    standalone: true,
    imports: [CarImageComponent],
    templateUrl: "./winner.component.html",
    styleUrl: "./winner.component.scss",
})
export class WinnerComponent implements OnInit {
    @Input() winner!: Winner;
    car!: Car;

    constructor(private service: GarageService) {}

    ngOnInit(): void {
        this.service.getCarById(this.winner.id).subscribe((car) => (this.car = car));
    }
}
