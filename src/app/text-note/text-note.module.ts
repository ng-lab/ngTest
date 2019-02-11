import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextNoteRoutingModule } from './text-note.routing';

import * as fromContainers from './containers';
import * as fromComponents from './components';

const containers = [fromContainers.StagingComponent];
const components = [fromComponents];

@NgModule({
  imports: [
    CommonModule,
    TextNoteRoutingModule
  ],
  declarations: [...containers, ...components]
})
export class TextNoteModule { }
