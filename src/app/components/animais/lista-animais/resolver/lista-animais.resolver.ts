import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of, switchMap, take } from 'rxjs';
import { UsuarioService } from 'src/app/components/autenticacao/services/usuario/usuario.service';

import { AnimaisService } from '../../services/animais.service';
import { Animais } from '../../models/animais';

@Injectable({
  providedIn: 'root',
})
export class ListaAnimaisResolver implements Resolve<Animais> {
  constructor(
    private animaiService: AnimaisService,
    private usuarioService: UsuarioService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Animais> {
    return this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animaiService.listaDoUsuario(userName);
      }),
      take(1)
    );
  }
}
