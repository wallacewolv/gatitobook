import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(
    private http: HttpClient,
  ) { }

  cadastraNovousuario(novoUsuario: NovoUsuario) {
    const url = 'https://localhost:3000/user/signup';

    return this.http.post(url, novoUsuario);
  }
}
