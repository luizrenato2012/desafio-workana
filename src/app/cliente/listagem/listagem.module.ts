import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem.component';
import { ListagemRoutingModule } from './listagem-routing.module';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [ListagemComponent, DialogComponent],
  imports: [
    CommonModule,
    ListagemRoutingModule
  ]
})
export class ListagemModule { }
