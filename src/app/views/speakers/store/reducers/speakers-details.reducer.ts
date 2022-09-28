import { Action, createReducer, on } from '@ngrx/store';
import { CallState, LoadingState } from 'src/app/shared/models/call-state';
import * as fromActions from '../actions/speakers-details.actions';

export interface SpeakersState {
  speakers: any;
  error: any;
  callState: CallState;
}

export const initialState: SpeakersState = {
  speakers: null,
  error: null,
  callState: LoadingState.INIT,
};

export const profileReducer = createReducer(
  initialState,
  on(fromActions.getSpeakers, (state) => ({
    ...state,
    callState: LoadingState.LOADING,
  })),
  on(fromActions.getSpeakersFailure, (state, { payload }) => ({
    ...state,
    callState: LoadingState.ERRORED,
    error: payload,
  })),
  on(fromActions.getSpeakersSuccess, (state, { payload }) => ({
    ...state,
    speakers: payload,
    callState: LoadingState.LOADED,
  }))
);

export function reducer(state: SpeakersState | undefined, action: Action) {
  return profileReducer(state, action);
}

export const getSpeakers = (state: SpeakersState) => {
  return state.speakers;
};

export const getError = (state: SpeakersState) => {
  return state.error;
};
