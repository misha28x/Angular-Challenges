import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OtherDocumentationComponent } from './other-documentation/other-documentation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OtherDocumentationComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: OtherDocumentationComponent }]),
  ],
})
export class OtherModule {}
