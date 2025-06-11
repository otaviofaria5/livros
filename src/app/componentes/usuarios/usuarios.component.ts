import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule, 
  ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  nome = '';
  email = '';
  mensagem = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  onLogin() {
    this.usuarioService.login(this.nome, this.email).subscribe({
      next: () => {
        this.mensagem = 'Login realizado com sucesso!';
        this.router.navigate(['/menu']);
      },
      error: () => this.mensagem = 'Usuário não encontrado.'
    });
  }

  onRegistrar() {
    this.router.navigate(['/cadastrar']);
  }
}