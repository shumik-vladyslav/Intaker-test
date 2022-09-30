import { createSelector } from '@ngrx/store';
import * as fromReducer from '../reducers/speakers-list.reducer';
import * as fromFeature from '../reducers';
import { LoadingState } from 'src/app/shared/models/call-state';

export const getSpeakersListState = createSelector(
    fromFeature.getSpeakersReviewState,
    (state: fromFeature.SpeakersState) => state?.speakersList
);

export const getSpeakersList = createSelector(
    getSpeakersListState,
    fromReducer.getSpeakersList
)

export const getSpeakersListIsLoading = createSelector(
    getSpeakersListState,
    s => s.callState === LoadingState.LOADING
)

export const getSpeakersListIsLoaded = createSelector(
    getSpeakersListState,
    s => s?.callState === LoadingState.LOADED
)

export const getSpeakersListError = createSelector(
    getSpeakersListState,
    s => fromReducer.getError(s?.error)
)
