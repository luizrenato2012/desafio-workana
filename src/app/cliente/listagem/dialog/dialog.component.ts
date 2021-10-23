import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Output()
  isConfirmado = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  confirma() {
    console.log(`Dialog - Confirmado `);
    console.log('Enviando');
    this.isConfirmado.emit(true);
  }

}
