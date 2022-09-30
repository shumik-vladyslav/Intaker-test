import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'speakers' },
  {
    path: 'speakers',
    loadChildren: () =>
      import('./views/speakers/speakers.module').then(
        (m) => m.SpeakersModule
      )
  },
  {
    path: 'video',
    loadChildren: () =>
      import('./views/video/video.module').then(
        (m) => m.VideoModule
      )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
