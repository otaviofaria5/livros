import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../enviroment/envrioments';
import { Avaliacoes } from '../model/avaliacoes';

@Injectable({
  providedIn: 'root'
})
export class AvaliacoesService {

  private apiUrl = `${environment.apiUrl}/avaliacoes`;
  constructor(private http :HttpClient) { }

  getAvaliacoes(): Observable<Avaliacoes[]> {
    return this.http.get<Avaliacoes[]>(this.apiUrl);
  }

  ExibirLivro(id: string): Observable<Avaliacoes> {
    return this.http.get<Avaliacoes>(`${this.apiUrl}/${id}`);
  }

  CadastrarAvaliacao(avaliacao: Avaliacoes): Observable<Avaliacoes> {
    return this.http.post<Avaliacoes>(this.apiUrl, avaliacao);
  }

}
