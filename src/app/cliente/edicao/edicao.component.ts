import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteFirestoreService } from '../cliente-firestore-service';
import { Cliente } from '../cliente-model';
import { ClienteService } from '../cliente-service';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {

  form: FormGroup;
  valores: any = {};
  exibeMensagem: boolean = false;
  tipoEdicao = '';

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private service: ClienteFirestoreService,
    private activatedRoute: ActivatedRoute) {
    this.initCliente();
  }

  ngOnInit(): void {
    this.initTitle();
  }

  private async initCliente() {
    const param = this.activatedRoute.snapshot.params.id;
    if (param) {
      const id = param;
      const recebido = this.activatedRoute.snapshot.data.cliente;
      this.valores = recebido;
      this.initForm();
    } else {
      this.initForm();
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [this.valores.id],
      nome: [this.valores.nome, [Validators.required]],
      email: [this.valores.email, [Validators.required, Validators.email]],
      telefone: [this.valores.telefone, [Validators.required]],
      dataNascimento: [this.valores.dataNascimento, [Validators.required]],
    });

    this.form.valueChanges.subscribe(selected => this.exibeMensagem = false);
  }

  private initTitle() {
    this.tipoEdicao = (!this.valores || !this.valores.id) ? 'Inclusão ' : 'Alteração ';
  }

  volta() {
    this.router.navigate(['listagem']);
  }

  cancela() {
    this.form.reset();
    this.tipoEdicao = 'Inclusão';
    this.exibeMensagem = false;
  }

  grava() {
    this.valores = { ... this.form.getRawValue() };
    console.log(`Gravando ${JSON.stringify(this.valores)}`);
    this.service.saveOrUpdate(this.valores).then(
      () => {
        this.form.reset();
        this.exibeMensagem = true;
      }, error => console.log('Erro ao inserir')
    );
  }

}
