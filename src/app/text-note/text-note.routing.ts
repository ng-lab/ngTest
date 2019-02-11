import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagingComponent } from './containers';
import { NoteDetailsComponent } from './components/note-details/note-details.component';

const routes: Routes = [
  {
    path: '',
    component: StagingComponent,
    children: [
      {
        path: 'text-note/:description',
        outlet: 'detail',
        component: NoteDetailsComponent
    }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextNoteRoutingModule {}
