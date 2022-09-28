import { createAction, props } from '@ngrx/store';

export enum SpeakersListActionTypes {
  GetSpeakersList = '[SpeakersList] Get SpeakersList',
  GetSpeakersListSuccess = '[SpeakersList API] Get SpeakersList Success',
  GetSpeakersListFailure = '[SpeakersList API] Get SpeakersList Failure'
}

export const getSpeakersList = createAction(
  SpeakersListActionTypes.GetSpeakersList
);
export const getSpeakersListSuccess = createAction(
  SpeakersListActionTypes.GetSpeakersListSuccess,
  props<{ payload: any }>()
);
export const getSpeakersListFailure = createAction(
  SpeakersListActionTypes.GetSpeakersListFailure,
  props<{ payload: any }>()
);
