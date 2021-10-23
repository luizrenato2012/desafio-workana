import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Cliente } from "./cliente-model";

@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  clientes: Cliente[] = [
    {
      id: "1",
      nome: "Cliiente 1",
      email: "cliente1@email.com.br",
      telefone: "(61) 8111-1111",
      dataNascimento: '2000-05-25'
    },
    {
      id: "2",
      nome: "Cliiente 2",
      email: "cliente4@email.com.br",
      telefone: "(61) 8111-2222",
      dataNascimento: '1998-10-21'
    },
    {
      id: "3",
      nome: "Cliiente 3",
      email: "cliente3@email.com.br",
      telefone: "(61) 8111-3333",
      dataNascimento: '1985-01-18'
    },
    {
      id: "4",
      nome: "Cliiente 4",
      email: "cliente4@email.com.br",
      telefone: "(61) 8111-4444",
      dataNascimento: '2000-04-18'
    }
  ]

  public list(): Observable<Cliente[]> {
    return of(this.clientes);
  }

  public delete(id: string): Observable<any> {
    this.clientes = this.clientes.filter(cliente => cliente.id !== id);
    return of({});
  }

  public insert(cliente: Cliente): Observable<Cliente> {
    const lastId = this.clientes.length++;
    cliente.id = lastId + '';
    this.clientes.push(cliente);
    return of(cliente);
  }

  public update({ id, nome, email, telefone, dataNascimento }: Cliente): Observable<Cliente> {
    let atual = this.clientes.find(cliente => cliente.id === id);
    if (!atual) {
      throw new Error(`Cliente id[${id}] nao encontrado`);
    }
    atual = { id, nome, email, telefone, dataNascimento };
    return of(atual);
  }


}
