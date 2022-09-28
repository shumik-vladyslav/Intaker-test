import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  catchError, finalize, map,
  switchMap,
  tap
} from 'rxjs/operators';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { SpeakersService } from '../../services/speakers.service';
import * as fromActions from '../actions/speakers-details.actions';


@Injectable()
export class SpeakersEffects {
  getSpeakers$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getSpeakers),
      tap(() => this.spinner.show()),
      switchMap(({id}) => {
        return this.api.getSpeakerDetails(id).pipe(
          map((data: any) => {
            return fromActions.getSpeakersSuccess({
              payload: data,
            });
          }),
          catchError((error) =>
            of(fromActions.getSpeakersFailure({ payload: error }))
          ),
          finalize(() => this.spinner.hide())
        );
      })
    )
  )

  constructor(
    private actions$: Actions,
    private api: SpeakersService,
    private spinner: SpinnerService
  ) { }
}
