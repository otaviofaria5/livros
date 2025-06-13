import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivroService } from '../../service/livro.service';
import { Livros } from '../../model/livros';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-adicionar',
  imports: [
     FormsModule,
    CommonModule,  

  ],
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css'],
})


export class AdicionarComponent implements OnInit {
  livro = {
    titulo: '',
    autor: '',
    genero: '',
    isbn: '',
    descricao: ''
  };
  mensagemSucesso: string = '';
  mensagemErro: string = '';

  constructor(
     private livroService: LivroService,
     private router: Router) {}

  ngOnInit(): void {
    this.CriarLivro();
  }
CriarLivro(): void {
  const novoLivro: Livros = {
    id : String(Date.now()), 
    titulo: this.livro.titulo,
    autorId: this.livro.autor,
    isbn: this.livro.isbn,
    genero: this.livro.genero,  
    descricao: this.livro.descricao,

    
  };

 this.livroService.CriarLivro(novoLivro).subscribe({
    next: (res) => {
      this.mensagemSucesso = 'Livro adicionado com sucesso!';
      this.mensagemErro = '';  
      setTimeout(() => this.router.navigate(['/livros']), 2000); 
    },
    error: (err) => {
      this.mensagemErro = 'Erro ao salvar livro. Tente novamente.';
    }
  });
}

voltar(): void {
  this.router.navigate(['/livros']);
}
}
