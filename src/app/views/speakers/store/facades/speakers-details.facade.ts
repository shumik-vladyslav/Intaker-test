import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromActions from '../actions/speakers-details.actions';
import * as fromReducer from '../reducers/speakers-details.reducer';
import * as fromSelectors from '../selectors/speakers-details.selectors';


@Injectable()
export class SpeakersFacade {
  speaker$ = this.store.pipe(select(fromSelectors.getSpeakersDelails));
  error$ = this.store.select(fromSelectors.getSpeakersError);
  isLoading$ = this.store.select(fromSelectors.getSpeakersIsLoading);

  constructor(private store: Store<fromReducer.SpeakersState>) { }

  loadSpeaker(id: string) {
    this.store.dispatch(fromActions.getSpeakers({ id }));
  }
}
