import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteResolve } from '../cliente-resolve';

import { EdicaoComponent } from './edicao.component';

const routes: Routes = [
  {
    path: '',
    component: EdicaoComponent,
    resolve: {
      cliente: ClienteResolve
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class EdicaoRoutingModule { }
