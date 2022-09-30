/* eslint-disable arrow-body-style */
import { Action, createReducer, on } from '@ngrx/store';
import { SpeakerItem, SpeakersResponse } from 'src/app/shared/models/application.model';
import { CallState, LoadingState } from 'src/app/shared/models/call-state';
import * as fromActions from '../actions/speakers-list.actions';

export interface SpeakersListState {
  speakersList: SpeakersResponse;
  callState: CallState;
  error: any;
}

export const initialState: SpeakersListState = {
  speakersList: {collection: {}},
  error: null,
  callState: LoadingState.INIT,
};

export const profileReducer = createReducer(
  initialState,
  on(fromActions.getSpeakersList, (state) => ({
    ...state,
    callState: LoadingState.LOADING,
  })),
  on(fromActions.getSpeakersListFailure, (state, { payload }) => ({
    ...state,
    callState: LoadingState.ERRORED,
    error: payload,
  })),
    on(fromActions.getSpeakersListSuccess, (state, { payload }) => ({
    ...state,
    speakersList: payload,
    callState: LoadingState.LOADED,
  })),
);

export function reducer(state: SpeakersListState | undefined, action: Action) {
  return profileReducer(state, action);
}

export const getSpeakersList = (state: SpeakersListState) => {
  return state.speakersList?.collection?.items?.map((item: SpeakerItem) => {
    const obj = {
      ...item.data[0],
      id: item.href.split('/')[item.href.split('/').length - 1]
    }
    return obj;
  });
};

export const getError = (state: SpeakersListState) => {
  return state.error;
};

export const getSpeakersListIsLoaded = (state: SpeakersListState): boolean => {
  return state.callState === LoadingState.LOADED;
};
