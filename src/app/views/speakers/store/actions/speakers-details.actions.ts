import { createAction, props } from '@ngrx/store';

export enum SpeakersActionTypes {
  GetSpeakers = '[Speakers] Get Speakers',
  GetSpeakersSuccess = '[Speakers API] Get Speakers Success',
  GetSpeakersFailure = '[Speakers API] Get Speakers Failure'
}

export const getSpeakers = createAction(
  SpeakersActionTypes.GetSpeakers,
  props<{ id: string }>()
);
export const getSpeakersSuccess = createAction(
  SpeakersActionTypes.GetSpeakersSuccess,
  props<{ payload: string }>()
);
export const getSpeakersFailure = createAction(
  SpeakersActionTypes.GetSpeakersFailure,
  props<{ payload: any }>()
);
