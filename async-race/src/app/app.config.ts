import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";

import { routes } from "./app.routes";
import { CarsEffects } from "./store/cars/cars.effects";
import { CarsReducer } from "./store/cars/cars.reducer";
import { createFormReducer, updateFormReducer } from "./store/inputs/inputs.reducer";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideAnimationsAsync(),
        provideHttpClient(),
        provideStore({ cars: CarsReducer, createForm: createFormReducer, updateForm: updateFormReducer }),
        provideEffects([CarsEffects]),
    ],
};
