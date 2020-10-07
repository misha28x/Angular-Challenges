import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicesDocumentationComponent } from './services-documentation/services-documentation.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ServicesDocumentationComponent },
    ]),
  ],
})
export class ServicesModule {}
