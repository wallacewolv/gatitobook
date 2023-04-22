import { NovoUsuario } from '../models/novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  private readonly url = 'http://localhost:3000/user';

  constructor(
    private http: HttpClient,
  ) { }

  cadastraNovousuario(novoUsuario: NovoUsuario) {
    const urlSignup = `${this.url}/signup`;
    return this.http.post(urlSignup, novoUsuario);
  }

  verificarUsuarioExistente(nomeUsuario: string) {
    const urlUserExists = `${this.url}/exists/${nomeUsuario}`
    return this.http.get(urlUserExists);
  }
}
