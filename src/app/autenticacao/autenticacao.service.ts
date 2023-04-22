import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(
    private http: HttpClient,
  ) { }

  autenticat(usuario: string, senha: string): Observable<any> {
    const url = 'http://localhost:3000/user/login';
    const params = { userName: usuario, password: senha };

    return this.http.post(url, params);
  }
}
