import { Component, OnInit } from '@angular/core';
import { Livros } from '../../model/livros';
import { LivroService } from '../../service/livro.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HeaderLivrosComponent } from "../../livros/header-livros/header-livros.component";

@Component({
  selector: 'app-livros',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeaderLivrosComponent
],
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  livros: Livros[] = [];
  livrosFiltrados: Livros[] = []; 
  livrosPaginados: Livros[] = [];

  filtro: string = '';
  paginaAtual: number = 1;
  itensPorPagina: number = 4;

  constructor(
    private livroService: LivroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarLivros();
  }

  carregarLivros(): void {
    this.livroService.getLivros().subscribe({
      next: (res) => {
        this.livros = res;
        this.livrosFiltrados = res;
        this.atualizarLivrosPaginados();
      }
    });
  }

    adicionarLivro(): void {
    this.router.navigate(['/adicionar']);
  }

  editarLivro(livro: Livros): void {
    this.router.navigate(['/editar', livro.id]);
  }

  excluirLivro(id: string): void {
    if (confirm('Tem certeza que deseja excluir este livro?')) {
      this.livroService.deleteLivro(id).subscribe({
        next: () => {
          this.livros = this.livros.filter(l => l.id !== id);
          this.filtrarLivros();
          this.atualizarLivrosPaginados();
        },
        error: (err) => console.error('Erro ao excluir livro:', err)
      });
    }
  }

  atualizarLivrosPaginados(): void {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    this.livrosPaginados = this.livrosFiltrados.slice(inicio, fim);
  }

  get totalPaginas(): number {
    return Math.ceil(this.livrosFiltrados.length / this.itensPorPagina);
  }

  paginaAnterior(): void {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
      this.atualizarLivrosPaginados();
    }
  }

  proximaPagina(): void {
    if (this.paginaAtual < this.totalPaginas) {
      this.paginaAtual++;
      this.atualizarLivrosPaginados();
    }
  }

    filtrarLivros(): void {
    const termo = this.filtro.toLowerCase().trim();

    if (termo === '') {
      this.livrosFiltrados = this.livros;
    } else {
      this.livrosFiltrados = this.livros.filter(livro =>
        livro.titulo.toLowerCase().includes(termo) ||
        livro.autorId.toLowerCase().includes(termo) ||
        livro.genero.toLowerCase().includes(termo) ||
        livro.isbn.toLowerCase().includes(termo)
      );
    }

    this.paginaAtual = 1;
    this.atualizarLivrosPaginados();
  }


}