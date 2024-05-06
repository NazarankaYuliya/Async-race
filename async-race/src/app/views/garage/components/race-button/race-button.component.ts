import { Component, Input, OnInit } from '@angular/core';

import { Car } from '../../../../models/garage.interfaces';
import { MoveService } from '../../../../services/move.service';
import { Store } from '@ngrx/store';
import { selectIsMoving } from '../../../../store/cars/cars.selectors';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-race-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './race-button.component.html',
    styleUrl: './race-button.component.scss',
})
export class RaceButtonComponent implements OnInit {
    @Input() cars: Car[] = [];
    isMoving$!: Observable<boolean>;

    constructor(
        private service: MoveService,
        private store: Store,
    ) {}

    ngOnInit(): void {
        this.isMoving$ = this.store.select(selectIsMoving);
    }

    startRace() {
        this.service.startRace(this.cars);
    }
}
