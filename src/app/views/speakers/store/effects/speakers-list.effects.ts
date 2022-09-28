import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map, switchMap, tap } from 'rxjs/operators';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { SpeakersService } from '../../services/speakers.service';
import * as fromActions from '../actions/speakers-list.actions';

@Injectable()
export class SpeakersListEffects {
  getSpeakersList$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getSpeakersList),
      tap(() => this.spinner.show()),
      switchMap(() => {
        return this.api.getSpeakers().pipe(
          map((data) => {
            return fromActions.getSpeakersListSuccess({
              payload: data,
            });
          }),
          catchError((error) =>
            of(fromActions.getSpeakersListFailure({ payload: error }))
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
