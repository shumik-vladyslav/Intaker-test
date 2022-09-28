import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromActions from '../actions/speakers-details.actions';
import * as fromReducer from '../reducers/speakers-details.reducer';
import * as fromSelectors from '../selectors/speakers-details.selectors';


@Injectable()
export class SpeakersFacade {
  speakers$ = this.store.pipe(select(fromSelectors.getSpeakers));
  error$ = this.store.select(fromSelectors.getSpeakersError);
  isLoading$ = this.store.select(fromSelectors.getSpeakersIsLoading);

  constructor(private store: Store<fromReducer.SpeakersState>) { }

  loadSpeakers(id: string) {
    this.store.dispatch(fromActions.getSpeakers({ id }));
  }
}
