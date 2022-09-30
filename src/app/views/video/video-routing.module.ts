import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoContainerComponent } from './components';


const routes: Routes = [
    {
        path: '',
        component: VideoContainerComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VideoRoutingModule { }
