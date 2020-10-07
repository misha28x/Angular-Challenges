import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesDocumentationComponent } from './pipes-documentation/pipes-documentation.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PipesDocumentationComponent },
    ]),
  ],
})
export class PipesModule {}
