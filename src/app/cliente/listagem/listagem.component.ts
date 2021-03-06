import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteFirestoreService } from '../cliente-firestore-service';

import { Cliente } from '../cliente-model';
import { ClienteService } from '../cliente-service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  clientes: Cliente[];
  idExclusao: string;
  mensagem = '';

  constructor(private service: ClienteFirestoreService,
    private router: Router) { }

  ngOnInit(): void {
    this.listaClientes();
  }

  private listaClientes() {
    this.service.list().subscribe(retorno => {
      this.clientes = retorno;
    }, error => console.error(error));
  }

  confirmaExclusao(isConfirma: boolean) {
    this.mensagem = '';
    if (isConfirma) {
      this.exclui(this.idExclusao);
    }
  }

  seleciona(id: string) {
    this.idExclusao = id;
  }

  exclui(idCliente) {
    this.service.delete(idCliente).then(
      () => {
        this.service.list().subscribe(retorno => this.clientes = retorno, error => console.error(error));
        this.mensagem = 'Registro excluido com sucesso';
      }, (error) => {
        console.log(error);
      });
  }

  adiciona() {
    this.mensagem = '';
    this.router.navigate(['inclusao']);
  }

  altera(id: string) {
    this.mensagem = '';
    this.router.navigate(['edicao', id])
  }


}
