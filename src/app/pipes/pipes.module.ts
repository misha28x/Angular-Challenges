import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PipesDocumentationComponent } from './pipes-documentation/pipes-documentation.component';

import { TruncatePipe } from './truncate/truncate.pipe';
import { SharedModule } from '../shared/shared.module';
import { CardFormatterPipe } from './card-formatter/card-formatter.pipe';
import { FlatPipePipe } from './flat-pipe/flat-pipe.pipe';
import { FilterByTermPipe } from '../shared/pipes/filter-by-tem/filter-by-term.pipe';

@NgModule({
  declarations: [
    TruncatePipe,
    PipesDocumentationComponent,
    CardFormatterPipe,
    FlatPipePipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: PipesDocumentationComponent },
    ]),
  ],
})
export class PipesModule {}
