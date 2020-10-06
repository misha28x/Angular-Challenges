import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AccordionComponent } from './components/accordion/accordion.component';
import { PanelComponent } from './components/accordion/panel/panel.component';
import { ProgressComponent } from './components/progress/progress.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, CardComponent, AccordionComponent, PanelComponent, ProgressComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule.forRoot([]),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
