import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DirectivesDocumentationComponent } from './directives-documentation/directives-documentation.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DirectivesDocumentationComponent },
    ]),
  ],
})
export class DirectivesModule {}
