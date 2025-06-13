import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../enviroment/envrioments';
import { Autores } from '../model/autores';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  private apiUrl = `${environment.apiUrl}/autores`;
  constructor(private http :HttpClient) { }

  getAutores(): Observable<Autores[]> {
    return this.http.get<Autores[]>(this.apiUrl);
  }

getBuscarAutoresPorLetras(filtro: string): Observable<Autores[]> {
  return this.http.get<Autores[]>(`${this.apiUrl}/pesquisar`, {params: { pesquisar: filtro }});
}

  CadastrarAutor(autor: Autores): Observable<Autores> {
    return this.http.post<Autores>(this.apiUrl, autor);
  }

  AtualizarAutor(autor: Autores): Observable<Autores> {
    return this.http.put<Autores>(`${this.apiUrl}/${autor.id}`, autor);
  }

  DeletarAutor(id: string): Observable<Autores> {
    return this.http.delete<Autores>(`${this.apiUrl}/${id}`);
  }

}
