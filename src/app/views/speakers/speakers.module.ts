import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import { SpeakersRoutingModule } from './speakers-routing.module';
import { SpeakersStoreModule } from './store/speakers-store.module';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpeakersRoutingModule,
    SpeakersStoreModule,
    SharedMaterialModule
  ]
})
export class SpeakersModule { }
