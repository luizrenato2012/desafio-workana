import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe para formatação de número de telefone com 10 digitos (99)9999-9999
 */
@Pipe({
  name: 'telefoneFormat'
})
export class TelefoneFormatPipe implements PipeTransform {

  transform(numero: string): string {
    if (numero == null) {
      return ""
    }
    if (numero.length !== 10) {
      return numero;
    }
    const ddd = numero.substr(0, 2)
    const num1 = numero.substr(2, 4);
    const num2 = numero.substr(6);
    return `(${ddd})${num1}-${num2}`;
  }

}
