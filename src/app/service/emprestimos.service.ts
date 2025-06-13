import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../enviroment/envrioments';
import { Emprestimos } from '../model/emprestimos';

@Injectable({
  providedIn: 'root'
})
export class EmprestimosService {

  private apiUrl = `${environment.apiUrl}/emprestimos`;
  constructor(private http :HttpClient) { }

  getEmprestimos(): Observable<Emprestimos[]> {
    return this.http.get<Emprestimos[]>(this.apiUrl);
  }

  ObterHistoricoEmprestimos(): Observable<Emprestimos[]> {
    return this.http.get<Emprestimos[]>(`${this.apiUrl}/historico`);
  }

  ObterLivrosEmprestados(): Observable<Emprestimos[]> {
    return this.http.get<Emprestimos[]>(`${this.apiUrl}/lista`);
  }

  RegristarEmprestimo(emprestimo: Emprestimos): Observable<Emprestimos> {
    return this.http.post<Emprestimos>(`${this.apiUrl}/registrar`, emprestimo);
  }

  DevolverEmprestimo(id: string): Observable<Emprestimos> {
    return this.http.put<Emprestimos>(`${this.apiUrl}/devolver/${id}`, {});
  }
}
