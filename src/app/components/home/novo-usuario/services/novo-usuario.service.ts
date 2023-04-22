import { environment } from './../../../../../environments/environment.prod';
import { NovoUsuario } from '../models/novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(
    private http: HttpClient,
  ) { }

  cadastraNovousuario(novoUsuario: NovoUsuario) {
    const urlSignup = `${API}/user/signup`;
    return this.http.post(urlSignup, novoUsuario);
  }

  verificarUsuarioExistente(nomeUsuario: string) {
    const urlUserExists = `${API}/user/exists/${nomeUsuario}`
    return this.http.get(urlUserExists);
  }
}
