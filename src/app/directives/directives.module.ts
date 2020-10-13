import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { DirectivesDocumentationComponent } from './directives-documentation/directives-documentation.component';

import { DebounceClickDirective } from './debounce-click/debounce-click.directive';

@NgModule({
  declarations: [DebounceClickDirective, DirectivesDocumentationComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: DirectivesDocumentationComponent },
    ]),
  ],
})
export class DirectivesModule {}
