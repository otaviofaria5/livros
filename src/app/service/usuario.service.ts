import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../enviroment/envrioments'; // Corrigido o caminho para o arquivo de ambiente

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private apiUrl = `${environment.apiUrl}/usuario`;
  constructor(private http: HttpClient) {}

login(nome: string, email: string): Observable<any> {
  return this.http.get(`${this.apiUrl}/login`, { params: { nome, email } });

}

  registrar(nome: string, email: string, endereco: string): Observable<any> {
    return this.http.post(this.apiUrl, { nome, email, endereco });
  }
}

