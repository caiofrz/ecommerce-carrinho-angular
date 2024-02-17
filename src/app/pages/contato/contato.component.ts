import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent {
  formContato!: FormGroup;

  constructor() {
    this.formContato = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      assunto: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      telefone: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mensagem: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
      ]),
    });
  }

  get nome() {
    return this.formContato.get('nome');
  }
  get assunto() {
    return this.formContato.get('assunto');
  }
  get telefone() {
    return this.formContato.get('telefone');
  }
  get email() {
    return this.formContato.get('email');
  }
  get mensagem() {
    return this.formContato.get('mensagem');
  }

  enviarFormulario() {
    if (this.formContato.invalid) return;
    alert('Mensagem enviada!');
    this.formContato.reset();
  }
}
