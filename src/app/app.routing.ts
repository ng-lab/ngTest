import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'text-note',
    pathMatch: 'full'
  },
  {
    path: 'text-note',
    loadChildren: '../app/text-note/text-note.module#TextNoteModule'
  },
  {
    path: 'article-note',
    loadChildren: '../app/article-note/article-note.module#ArticleNoteModule'
  },
  {
    path: 'document-note',
    loadChildren: '../app/document-note/document-note.module#DocumentNoteModule'
  },
  {
    path: 'picture-note',
    loadChildren: '../app/picture-note/picture-note.module#PictureNoteModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
