import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem.component';
import { ListagemRoutingModule } from './listagem-routing.module';



@NgModule({
  declarations: [ListagemComponent],
  imports: [
    CommonModule,
    ListagemRoutingModule
  ]
})
export class ListagemModule { }
