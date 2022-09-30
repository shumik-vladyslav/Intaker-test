import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakerDetailsComponent, SpeakersListComponent } from './components';


const routes: Routes = [
    {
        path: '',
        component: SpeakersListComponent,
    },
    {
        path: 'details/:id',
        component: SpeakerDetailsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SpeakersRoutingModule { }
