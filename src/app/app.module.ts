import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {CloudinaryModule} from '@cloudinary/ng';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot(),
    BrowserAnimationsModule,
    CloudinaryModule
  ],
  providers: [],
  entryComponents: [SpinnerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
