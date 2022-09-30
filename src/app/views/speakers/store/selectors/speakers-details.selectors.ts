import { createSelector } from '@ngrx/store';
import * as fromReducer from '../reducers/speakers-details.reducer';
import * as fromFeature from '../reducers';
import { LoadingState } from 'src/app/shared/models/call-state';

export const getSpeakersState = createSelector(
    fromFeature.getSpeakersReviewState,
    (state: fromFeature.SpeakersState) => state.speakers
);

export const getSpeakersDelails = createSelector(
    getSpeakersState,
    fromReducer.getSpeakersDelails
)

export const getSpeakersIsLoading = createSelector(
    getSpeakersState,
    s => s.callState === LoadingState.LOADING
)

export const getSpeakersIsLoaded = createSelector(
    getSpeakersState,
    s => s.callState === LoadingState.LOADED
)

export const getSpeakersError = createSelector(
    getSpeakersState,
    s => fromReducer.getError(s.error)
)
