import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { ComponentsDocumentationComponent } from './components-documentation/components-documentation.component';

import { LoaderComponent } from './loader/loader.component';
import { RatingComponent } from './rating/rating.component';
import { ProgressComponent } from './progress/progress.component';
import { PanelComponent } from './accordion/panel/panel.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CardInputComponent } from './card-input/card-input.component';
import { BlockquoteComponent } from './blockquote/blockquote.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [
    AccordionComponent,
    PanelComponent,
    ProgressComponent,
    RatingComponent,
    LoaderComponent,
    ComponentsDocumentationComponent,
    CardInputComponent,
    BlockquoteComponent,
    ToggleComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    NzIconModule.forChild([]),
    RouterModule.forChild([
      { path: '', component: ComponentsDocumentationComponent },
    ]),
  ],
})
export class ComponentsModule {}
