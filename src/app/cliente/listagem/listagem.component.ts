import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente-model';
import { ClienteService } from '../cliente-service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  clientes$: Observable<Cliente[]>;
  idExclusao: string;
  constructor(private service: ClienteService) { }

  ngOnInit(): void {
    this.clientes$ = this.service.list();
  }

  confirmaExclusao(isConfirma: boolean) {
    console.log(`Listagem - Recebido ${isConfirma}`);
    if (isConfirma) {
      this.exclui(this.idExclusao);
    }
  }

  seleciona(id: string) {
    this.idExclusao = id;
  }

  async exclui(idCliente) {
    console.log(`excluindo.... ${this.idExclusao}`)
    this.service.delete(idCliente).subscribe(
      () => {
        console.log('excluido com sucesso');
        this.clientes$ = this.service.list();
        console.log('Registro excluido com sucesso');
      }, (error) => {
        console.log(error);
        console.log('Erro ao excluir registro')
      });
  }


}
