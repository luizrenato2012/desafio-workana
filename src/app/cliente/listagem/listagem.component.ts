import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  constructor(private service: ClienteService,
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
    if (isConfirma) {
      this.exclui(this.idExclusao);
    }
  }

  seleciona(id: string) {
    this.idExclusao = id;
  }

  exclui(idCliente) {
    this.service.delete(idCliente).subscribe(
      () => {
        this.service.list().subscribe(retorno => this.clientes = retorno, error => console.error(error));
        console.log('Registro excluido com sucesso');
      }, (error) => {
        console.log(error);
      });
  }

  adiciona() {
    this.router.navigate(['inclusao']);
  }

  altera(id: string) {
    this.router.navigate(['edicao', id])
  }


}
