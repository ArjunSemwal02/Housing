import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCounterState = createFeatureSelector<number>('counter');

export const selectCounter = createSelector(selectCounterState, (state) => state);
