import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Livros } from '../../model/livros';
import { LivroService } from '../../service/livro.service';
import { HeaderLivrosComponent } from "../header-livros/header-livros.component";

@Component({
  selector: 'app-reservados',
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    HeaderLivrosComponent
],
  templateUrl: './reservados.component.html',
  styleUrl: './reservados.component.css'
})
export class ReservadosComponent implements OnInit {
  livros: Livros[] = [];
  paginaAtual: number = 1;
  itensPorPagina: number = 4;
  livrosPaginados: Livros[] = [];

    constructor(private livroService: LivroService) {}

    ngOnInit(): void {
      this.carregarLivros();
    }
    carregarLivros(): void {
      this.livroService.GetLivrosReservados().subscribe({
        next: (res)  =>{ this.livros = res,
        this.atualizarLivrosPaginados();
        },
        error: (err) => console.error('Erro ao buscar livros:', err)
      });
    }

    atualizarLivrosPaginados(): void {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    this.livrosPaginados = this.livros.slice(inicio, fim);
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

    get totalPaginas(): number {
    return Math.ceil(this.livros.length / this.itensPorPagina);
    }
  }

