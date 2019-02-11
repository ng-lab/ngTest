import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagingComponent } from './containers/staging/staging.component';

const routes: Routes = [
  {
    path: '',
    component: StagingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class PictureNoteRoutingModule {}
