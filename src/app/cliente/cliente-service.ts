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
      telefone: "6181111111",
      dataNascimento: '2000-05-25'
    },
    {
      id: "2",
      nome: "Cliiente 2",
      email: "cliente4@email.com.br",
      telefone: "6181112222",
      dataNascimento: '1998-10-21'
    },
    {
      id: "3",
      nome: "Cliiente 3",
      email: "cliente3@email.com.br",
      telefone: "6181113333",
      dataNascimento: '1985-01-18'
    },
    {
      id: "4",
      nome: "Cliiente 4",
      email: "cliente4@email.com.br",
      telefone: "6181114444",
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

  /**
   * inclui novo ou altera existente
   * @param cliente
   * @returns
   */
  public save(cliente: Cliente): Observable<Cliente> {

    if (cliente.id) {
      let atual = this.clientes.find(cl => cliente.id === cl.id);
      const index = this.clientes.indexOf(atual);
      atual = { ...cliente };
      this.clientes[index] = atual;
      return of(atual);
    }

    let lastId = this.clientes.length;
    cliente.id = (++lastId) + '';
    this.clientes.push(cliente);
    return of(cliente);
  }

  public find(id: string): Observable<Cliente> {
    const cliente = this.clientes.find(cliente => cliente.id === id);
    return of(cliente);
  }


}
