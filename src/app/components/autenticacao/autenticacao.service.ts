import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    const url = 'http://localhost:3000/user/login';
    const params = { userName: usuario, password: senha };

    return this.http.post(url, params, { observe: 'response' })
      .pipe(
        tap((headerRes) => {
          const authToken = headerRes.headers.get('x-access-token') ?? '';
          this.usuarioService.salvaToken(authToken);
        })
      );
  }
}
