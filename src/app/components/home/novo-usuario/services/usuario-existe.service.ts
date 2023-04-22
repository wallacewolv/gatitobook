import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(
    private novousuarioService: NovoUsuarioService,
  ) { }

  usuarioExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        // switchMap para trocar o fluxo
        switchMap((nomeUsuario) =>
          this.novousuarioService.verificarUsuarioExistente(nomeUsuario)
        ),
        // map para trocar o resultado
        map((usuarioExiste) =>
          (usuarioExiste ? { usuarioExistente: true } : null)
        ),
        // first para encerrar o fluxo da validação
        first()
      )
    }
  }
}
