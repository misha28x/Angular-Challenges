import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToTopComponent } from './to-top/to-top.component';

const EXPORTED_DECLARATIONS = [ToolbarComponent, ToTopComponent];

@NgModule({
  declarations: EXPORTED_DECLARATIONS,
  exports: EXPORTED_DECLARATIONS,
  imports: [CommonModule, NzIconModule.forRoot([]), FormsModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class CoreModule {}
