import { Component, OnDestroy, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';

import { updateCar } from '../../../../store/cars/cars.actions';
import { getSelectedCar } from '../../../../store/cars/cars.selectors';
import { updateUpdateCarForm } from '../../../../store/inputs/inputs.action';
import { getUpdateFormInput } from '../../../../store/inputs/inputs.selectors';

@Component({
    selector: 'app-update-car',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './update-car.component.html',
    styleUrl: './update-car.component.scss',
})
export class UpdateCarComponent implements OnInit, OnDestroy {
    updateForm: FormGroup;

    selectedCarID: number | undefined;

    constructor(
        private fb: FormBuilder,
        private store: Store,
    ) {
        this.updateForm = this.fb.group({
            name: ['', Validators.required],
            color: ['#000000', Validators.required],
        });
    }

    ngOnInit(): void {
        this.store
            .select(getUpdateFormInput)
            .subscribe(data => this.updateForm.setValue(data));

        this.store.select(getSelectedCar).subscribe(data => {
            if (data && data.id) {
                this.store.select(getSelectedCar).subscribe(data => {
                    this.selectedCarID = data?.id;
                });
            }
        });
    }

    ngOnDestroy() {
        const { name, color } = this.updateForm.value;
        this.store.dispatch(updateUpdateCarForm({ name, color }));
    }

    onUpdate(): void {
        if (this.updateForm.valid && this.selectedCarID) {
            const updatedCar = this.updateForm.value;
            this.store.dispatch(
                updateCar({ carID: this.selectedCarID, carData: updatedCar }),
            );
            this.updateForm.reset({ name: '', color: '#000000' });
        }
    }
}
