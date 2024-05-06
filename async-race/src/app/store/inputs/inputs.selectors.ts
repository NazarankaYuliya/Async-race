import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CreateFormState, UpdateFormState } from './inputs.state';

const getCreateFormState = createFeatureSelector<CreateFormState>('createForm');
const getUpdateFormState = createFeatureSelector<UpdateFormState>('updateForm');

export const getCreateFormInput = createSelector(
    getCreateFormState,
    state => state.createCarForm,
);

export const getUpdateFormInput = createSelector(
    getUpdateFormState,
    state => state.updateCarForm,
);
