import { Usuarios } from './../model/usuarios';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../enviroment/envrioments'; // Corrigido o caminho para o arquivo de ambiente


@Injectable({ providedIn: 'root' })
export class UsuarioService {

  private apiUrl = `${environment.apiUrl}/usuario`;
  constructor(private http: HttpClient) {}

  login(nome: string, email: string): Observable<Usuarios> {
  return this.http.get<Usuarios>(`${this.apiUrl}/login`, { params: { nome, email } });
}
CadastrarUsuario(Usuario: Usuarios): Observable<Usuarios> {
  return this.http.post<Usuarios>(this.apiUrl, Usuario); 
}
AtualizarUsuario(Usuario: Usuarios): Observable<Usuarios> {
    return this.http.put<Usuarios>(`${this.apiUrl}/${Usuario.id}`, Usuario);
  }

  DeletarUsuario(id: string): Observable<Usuarios> {
    return this.http.delete<Usuarios>(`${this.apiUrl}/${id}`);
  }


}

