import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {

  form: FormGroup;
  cliente: any = {};

  constructor(private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: [this.cliente.email, [Validators.required, Validators.email]],
      telefone: [this.cliente.telefone, [Validators.required]],
      dataNascimento: [this.cliente.dataNascimento, [Validators.required]],
    });
  }

  volta() {
    this.router.navigate(['listagem']);
  }

  grava() {
    this.cliente = this.form.getRawValue();
    console.log(`Geavando ${JSON.stringify(this.cliente)}`);
  }

}
