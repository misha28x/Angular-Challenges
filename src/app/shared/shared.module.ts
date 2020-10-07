import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StackComponent } from './stack/stack.component';

const EXPORTED_DECLARATIONS = [StackComponent];

@NgModule({
  declarations: EXPORTED_DECLARATIONS,
  exports: EXPORTED_DECLARATIONS,
  imports: [CommonModule],
})
export class SharedModule {}
