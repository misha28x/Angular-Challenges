import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StackComponent } from './stack/stack.component';
import { CardComponent } from './card/card.component';
import { FilterByTermPipe } from './filter-by-tem/filter-by-term.pipe';

const EXPORTED_DECLARATIONS = [StackComponent, CardComponent, FilterByTermPipe];

@NgModule({
  declarations: EXPORTED_DECLARATIONS,
  exports: EXPORTED_DECLARATIONS,
  imports: [CommonModule],
})
export class SharedModule {}
