import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { CarsEffects } from './store/cars/cars.effects';
import { carsReducer } from './store/cars/cars.reducer';
import {
    createFormReducer,
    updateFormReducer,
} from './store/inputs/inputs.reducer';
import { WinnersEffects } from './store/winners/winners.effects';
import { winnersReducer } from './store/winners/winners.reducer';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideAnimationsAsync(),
        provideHttpClient(),
        provideStore({
            cars: carsReducer,
            createForm: createFormReducer,
            updateForm: updateFormReducer,
            winners: winnersReducer,
        }),
        provideEffects([CarsEffects, WinnersEffects]),
    ],
};
