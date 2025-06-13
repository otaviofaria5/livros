import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../../service/livro.service';
import { Livros } from '../../model/livros';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {
  livro: Livros = {
    id: '',
    titulo: '',
    autorId: '',
    genero: '',
    isbn: '',
    descricao: ''
  };

  mensagemSucesso = '';
  mensagemErro = '';

  constructor(
    private livroService: LivroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
  /* (id) {
      this.livroService.ObterLivroPorId(id).subscribe({
        next: (res) => this.livro = res,
        error: () => this.mensagemErro = 'Livro não encontrado.'
      });
    } */
  }

  salvar(): void {
    this.livroService.AtualizarLivro(this.livro).subscribe({
      next: () => {
        this.mensagemSucesso = 'Livro editado com sucesso!';
        this.mensagemErro = '';
        setTimeout(() => this.router.navigate(['/livros']), 2000);
      },
      error: () => {
        this.mensagemErro = 'Erro ao atualizar livro. Tente novamente.';
        this.mensagemSucesso = '';
      }
    });
  }

  voltar(): void {
    this.router.navigate(['/livros']);
  }
}
