import { Component } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cadastrar',
  imports: [
    FormsModule,
    CommonModule,

],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  nome = '';
  email = '';
  endereco = '';
  mensagem = '';

  constructor(
    private usuarioService: UsuarioService,
  
  ) {}

    onRegistrar() {
    const endereco = 'Endereço Exemplo';
    this.usuarioService.registrar(this.nome, this.email, endereco).subscribe({
      next: () => this.mensagem = 'Usuário registrado com sucesso!',
      error: () => this.mensagem = 'Erro ao registrar usuário.'
    });
  }
}
