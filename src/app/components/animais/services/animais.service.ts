import { environment } from '../../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animais, Animal } from '../models/animais';
import { TokenService } from '../../autenticacao/token.service';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    const url = `${API}/${nomeDoUsuario}/photos`;
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);

    return this.http.get<Animais>(url, { headers });
  }

  buscarPorId(id: number): Observable<Animal> {
    const url = `${API}/photos/${id}`;
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);

    return this.http.get<Animal>(url, { headers });
  }
}
