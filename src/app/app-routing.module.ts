import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'listagem',
    loadChildren: () => import('./cliente/listagem/listagem.module').then(m => m.ListagemModule)
  },
  {
    path: 'edicao/:id',
    loadChildren: () => import('./cliente/edicao/edicao.module').then(m => m.EdicaoModule)
  },
  {
    path: 'inclusao',
    loadChildren: () => import('./cliente/edicao/edicao.module').then(m => m.EdicaoModule)
  },
  {
    path: '',
    redirectTo: '/listagem',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
