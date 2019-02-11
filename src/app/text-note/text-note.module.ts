import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextNoteRoutingModule } from './text-note.routing';

import * as fromContainers from './containers';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as fromComponents from './components';

const containers = [fromContainers.StagingComponent, fromContainers.TextNotesComponent, fromContainers.CreateNoteComponent];
const components = [fromComponents.NoteDetailsComponent];

@NgModule({
  imports: [
    CommonModule,
    TextNoteRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [...containers, ...components]
})
export class TextNoteModule { }
