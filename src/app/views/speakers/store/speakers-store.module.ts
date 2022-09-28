import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';
import { effects } from './effects';

import { facades } from './facades';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('speakers', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [],
  providers: [facades],
})
export class SpeakersStoreModule {}
