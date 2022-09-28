import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as speakersListReducer from './speakers-list.reducer';
import * as speakersReducer from './speakers-details.reducer';


export interface SpeakersState {
  speakersList: speakersListReducer.SpeakersListState;
  speakers: speakersReducer.SpeakersState;
}

export const reducers: ActionReducerMap<SpeakersState> = {
  speakersList: speakersListReducer.reducer,
  speakers: speakersReducer.reducer,
};

export const getSpeakersReviewState = createFeatureSelector<SpeakersState>(
  'speakers'
);
