import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { createCar } from "../../../../store/cars/cars.actions";
import { updateCreateCarForm } from "../../../../store/inputs/inputs.action";
import { getCreateFormInput } from "../../../../store/inputs/inputs.selectors";

@Component({
    selector: "app-create-car",
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: "./create-car.component.html",
    styleUrl: "./create-car.component.scss",
})
export class CreateCarComponent implements OnInit, OnDestroy {
    createForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private store: Store,
    ) {
        this.createForm = this.fb.group({
            name: ["", Validators.required],
            color: ["#000000", Validators.required],
        });
    }

    ngOnInit(): void {
        this.store.select(getCreateFormInput).subscribe((data) => this.createForm.setValue(data));
    }

    ngOnDestroy() {
        const { name, color } = this.createForm.value;
        this.store.dispatch(updateCreateCarForm({ name, color }));
    }

    onCreate(): void {
        if (this.createForm.valid) {
            const newcar = this.createForm.value;
            this.store.dispatch(createCar({ carData: newcar }));
            this.createForm.reset({ name: "", color: "#000000" });
        }
    }
}
