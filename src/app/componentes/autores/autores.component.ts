import { Component, OnInit } from '@angular/core';
import { Autores } from '../../model/autores';
import { AutoresService } from '../../service/autores.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autores',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css'] 
})
export class AutoresComponent implements OnInit {
  autores: Autores[] = [];
  autoresFiltrados: Autores[] = []; 
  autoresPaginados: Autores[] = [];

  filtro: string = '';
  paginaAtual: number = 1;
  itensPorPagina: number = 4;

  constructor(
    private autoresService: AutoresService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarAutores();
  }

  carregarAutores(): void {
    this.autoresService.getAutores().subscribe({
      next: (res) => {
        this.autores = res;
        this.autoresFiltrados = res;
        this.atualizarAutorPaginados();
      }
    });
  }

  adicionarAutor(): void {
    this.router.navigate(['/adicionar']);
  }

  editarAutor(autor: Autores): void {
    this.router.navigate(['/editar', autor.id]);
  }

  excluirAutor(id: string): void {
  }

  atualizarAutorPaginados(): void {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    this.autoresPaginados = this.autoresFiltrados.slice(inicio, fim);
  }

  get totalPaginas(): number {
    return Math.ceil(this.autoresFiltrados.length / this.itensPorPagina);
  }

  paginaAnterior(): void {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
      this.atualizarAutorPaginados();
    }
  }

  proximaPagina(): void {
    if (this.paginaAtual < this.totalPaginas) {
      this.paginaAtual++;
      this.atualizarAutorPaginados();
    }
  }

  filtrarAutor(): void {
    const termo = this.filtro.toLowerCase().trim();

    if (termo === '') {
      this.autoresFiltrados = this.autores;
      this.paginaAtual = 1;
      this.atualizarAutorPaginados();
    } else {
      this.autoresService.getBuscarAutoresPorLetras(termo).subscribe({
        next: (res) => {
          this.autoresFiltrados = res;
          this.paginaAtual = 1;
          this.atualizarAutorPaginados();
        },
        error: () => {
          this.autoresFiltrados = [];
          this.paginaAtual = 1;
          this.atualizarAutorPaginados();
        }
      });
    }
  }
}
