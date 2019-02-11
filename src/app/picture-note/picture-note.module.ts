import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureNoteRoutingModule } from './picture-note.routing';

import * as fromContainers from './containers';
// import * as fromComponents from './components';

const containers = [fromContainers.StagingComponent];
// const components = [fromComponents];

@NgModule({
  imports: [
    CommonModule,
    PictureNoteRoutingModule
  ],
  declarations: [...containers]
})
export class PictureNoteModule { }
