import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentNoteRoutingModule } from './document-note.routing';

import * as fromContainers from './containers';
// import * as fromComponents from './components';

const containers = [fromContainers.StagingComponent];
// const components = [fromComponents];

@NgModule({
  imports: [
  CommonModule,
    DocumentNoteRoutingModule
  ],
  declarations: [...containers]
})
export class DocumentNoteModule { }
