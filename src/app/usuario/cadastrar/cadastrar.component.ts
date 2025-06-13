import { Component } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';   
import { Usuarios } from '../../model/usuarios';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'] 
})
export class CadastrarComponent {
    usuario: Usuarios = {
    nome: '',
    email: '',
    endereco: ''
  };

  mensagemSucesso = '';
  mensagemErro = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}


  onRegistrar() {
    this.usuarioService.CadastrarUsuario(this.usuario).subscribe({
      next: () => {
        this.mensagemSucesso = 'Usuário registrado com sucesso!';
        this.usuario = { nome: '', email: '', endereco: '' };

        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1500);
      },
      error: () => {
        this.mensagemErro = 'Erro ao registrar usuário.';
    }
});
}

    onCancelar() {
    this.router.navigate(['/']);
  }
    
}
