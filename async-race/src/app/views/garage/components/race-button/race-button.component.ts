import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Car } from "../../../../models/garage.interfaces";
import { MoveService } from "../../../../services/move.service";
import { Subscription } from "rxjs";

@Component({
    selector: "app-race-button",
    standalone: true,
    imports: [],
    templateUrl: "./race-button.component.html",
    styleUrl: "./race-button.component.scss",
})
export class RaceButtonComponent implements OnInit, OnDestroy {
    @Input() cars: Car[] = [];

    constructor(private service: MoveService) {}

    ngOnInit(): void {}

    ngOnDestroy() {}

    startRace() {
        this.service.startRace(this.cars);
    }
}
