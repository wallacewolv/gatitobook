import { environment } from './../../../environments/environment.prod';
import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    const url = `${API}/user/login`;
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
