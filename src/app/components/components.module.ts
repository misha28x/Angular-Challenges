import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { DebounceSearchComponent } from './debounce-search/debounce-search.component';
import { SearchListComponent } from './search-list/search-list.component';

import { CounterComponent } from './counter/counter.component';
import { TableComponent } from './table/table.component';
import { PaginatorComponent } from './paginator/paginator.component';

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
    DebounceSearchComponent,
    SearchListComponent,
    PaginatorComponent,
    CounterComponent,
    TableComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    NzIconModule.forChild([]),
    RouterModule.forChild([
      { path: '', component: ComponentsDocumentationComponent },
    ]),
    FormsModule,
  ],
})
export class ComponentsModule {}
