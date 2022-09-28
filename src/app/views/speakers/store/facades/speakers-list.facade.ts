import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromActions from '../actions/speakers-list.actions';
import * as fromSelectors from '../selectors/speakers-list.selectors';

@Injectable()
export class SpeakersListFacade {
  speakersList$ = this.store.select(fromSelectors.getSpeakersList);
  speakersListItems$ = this.store.select(fromSelectors.getSpeakersListItems);
  totalCount$ = this.store.select(fromSelectors.getSpeakersTotalCount);
  speakersListPageNumber$ = this.store.select(
    fromSelectors.getSpeakersListPageNumber
  );

  isLoading$ = this.store.select(fromSelectors.getSpeakersListIsLoading);
  isLoaded$ = this.store.select(fromSelectors.getSpeakersListIsLoaded);
  error$ = this.store.select(fromSelectors.getSpeakersListError);

  constructor(private store: Store) {}

  loadSpeakersList(): void {
    this.store.dispatch(fromActions.getSpeakersList());
  }
}
