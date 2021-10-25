import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { classToPlain } from 'class-transformer';
import { Cliente } from "./cliente-model";

@Injectable({
  providedIn: 'root',
})
export class ClienteFirestoreService {

  collection: AngularFirestoreCollection<Cliente>;

  constructor(private firestore: AngularFirestore) {
    this.collection = firestore.collection<Cliente>('clientes');
  }

  public list() {
    return this.collection.valueChanges();
  }

  public saveOrUpdate(cliente: Cliente): Promise<void> {
    if (!cliente) {
      throw new Error('Cliente invalido!');
    }

    if (cliente.id) {
      return this.collection.doc(cliente.id).set(cliente);
    }

    return this.collection.add(cliente).then(res => {
      //garante que o id grava seja o gerado automaticamente
      cliente.id = res.id;
      this.collection.doc(res.id).set(cliente);
    })
  }

  public delete(id: string): Promise<void> {
    return this.collection.doc(id).delete();
  }

  public find(id: string): Observable<Cliente> {
    return this.collection.doc(id).get()
      .pipe(map(snapshotDocument => this.parseToPlain(snapshotDocument))
      );
  }

  /** transforma objeto do firestore (DocumentSnapshot) em cliente */
  private parseToPlain(document: any): Cliente {
    if (!document.data()) {
      return null;
    }
    const obj = {
      id: document.id,
      ...(document.data())
    };
    return classToPlain(obj) as Cliente;
  }

}
