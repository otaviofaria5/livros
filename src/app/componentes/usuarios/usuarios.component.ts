import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router';
import { Usuarios } from '../../model/usuarios';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
    usuario: Usuarios = {
    nome: '',
    email: '',
    endereco: ''
    }

    mensagem = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  onLogin() {
  this.usuarioService.login(this.usuario).subscribe({
      next: () => {
        this.mensagem = 'Login realizado com sucesso!';
        this.router.navigate(['/header']);
      },
      error: () => this.mensagem = 'Usuário não encontrado.'
    });
  }

  onRegistrar() {
    this.router.navigate(['/cadastrar']);
  }
}