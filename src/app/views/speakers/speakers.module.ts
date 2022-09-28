import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import { SpeakersRoutingModule } from './speakers-routing.module';
import { SpeakersStoreModule } from './store/speakers-store.module';

@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    SpeakersRoutingModule,
    SpeakersStoreModule
  ]
})
export class SpeakersModule { }
