import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { ClienteFirestoreService } from "./cliente-firestore-service";
import { Cliente } from "./cliente-model";

/**
 * Resolve para guardar objeto selecionado na listagem e fornecer para a tela de edicao
 */
@Injectable({
  providedIn: "root"
})
export class ClienteResolve implements Resolve<Observable<any>> {

  constructor(private service: ClienteFirestoreService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cliente> {
    const id = route.params.id;
    return this.service.find(id);
  }
}
