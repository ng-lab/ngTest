import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';

const components = [fromComponents.DescriptionComponent, fromComponents.HeaderComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...components],
  exports: [...components]
})
export class SharedModule { }
