import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StackComponent } from './components/stack/stack.component';
import { CardComponent } from './components/card/card.component';
import { FilterByTermPipe } from './pipes/filter-by-tem/filter-by-term.pipe';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';

const EXPORTED_DECLARATIONS = [
  StackComponent,
  CardComponent,
  FilterByTermPipe,
  CapitalizePipe,
];

@NgModule({
  declarations: EXPORTED_DECLARATIONS,
  exports: EXPORTED_DECLARATIONS,
  imports: [CommonModule],
})
export class SharedModule {}
