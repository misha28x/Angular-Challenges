import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsDocumentationComponent } from './components-documentation/components-documentation.component';

import { CardComponent } from './card/card.component';
import { AccordionComponent } from './accordion/accordion.component';
import { PanelComponent } from './accordion/panel/panel.component';
import { ProgressComponent } from './progress/progress.component';
import { RatingComponent } from './rating/rating.component';

import { SharedModule } from '../shared/shared.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    CardComponent,
    AccordionComponent,
    PanelComponent,
    ProgressComponent,
    RatingComponent,
    ComponentsDocumentationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NzIconModule.forChild([]),
    RouterModule.forChild([
      { path: '', component: ComponentsDocumentationComponent },
    ]),
  ],
})
export class ComponentsModule {}
