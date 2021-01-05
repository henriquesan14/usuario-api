import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:51349/api/v1';

  getAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.baseUrl}/usuario`);
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/usuario/${id}`);
  }

  saveUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}/usuario`, usuario);
  }

  updateUsuario(usuario: Usuario, id: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/usuario/${id}`, usuario);
  }

  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/usuario/${id}`);
  }
}
