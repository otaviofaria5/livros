import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livros } from '../model/livros';
import { environment } from '../enviroment/envrioments';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private apiUrl = `${environment.apiUrl}/livros`;

  constructor(private http: HttpClient) {}

  getLivros(): Observable<Livros[]> {
    return this.http.get<Livros[]>(this.apiUrl);
  }

  GetLivrosDisponiveis(): Observable<Livros[]> {
    return this.http.get<Livros[]>(`${this.apiUrl}/disponiveis`);
  }

  GetLivrosReservados(): Observable<Livros[]> {
    return this.http.get<Livros[]>(`${this.apiUrl}/reservados`);
  }

  PesquisarLivros(filtro: string): Observable<Livros[]> {
    return this.http.get<Livros[]>(`${this.apiUrl}/pesquisar`, { params: { filtro } });
  }

  CriarLivro(livro: Livros): Observable<Livros> {
    return this.http.post<Livros>(this.apiUrl, livro);
  } 


  AtualizarLivro(livro: Livros): Observable<Livros> {
    return this.http.put<Livros>(`${this.apiUrl}/${livro.id}`, livro);
  }
  
  deleteLivro(id: string): Observable<Livros> {
    return this.http.delete<Livros>(`${this.apiUrl}/${id}`);
  }
}
