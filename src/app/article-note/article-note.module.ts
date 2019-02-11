import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleNoteRoutingModule } from './article-note.routing';

import * as fromContainers from './containers';
import * as fromComponents from './components';

const containers = [fromContainers.StagingComponent];
const components = [fromComponents];

@NgModule({
  imports: [
  CommonModule,
  ArticleNoteRoutingModule
  ],
  declarations: [...containers, ...components]
})
export class ArticleNoteModule { }
