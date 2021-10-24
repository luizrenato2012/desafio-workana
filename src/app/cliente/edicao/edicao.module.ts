import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EdicaoComponent } from './edicao.component';
import { EdicaoRoutingModule } from './edicao-routing.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
@NgModule({
  declarations: [EdicaoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EdicaoRoutingModule,
    NgxMaskModule.forRoot(options)
  ]
})
export class EdicaoModule { }
