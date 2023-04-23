import { switchMap, Observable } from 'rxjs';
import { AnimaisService } from './../services/animais.service';
import { Animais } from './../models/animais';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../autenticacao/services/usuario/usuario.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  animais$!: Observable<Animais>;

  constructor(
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService,
  ) { }

  ngOnInit(): void {
    this.retornaUsuario();
  }

  private retornaUsuario() {
    this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animaisService.listaDoUsuario(userName);
      })
    );
  }
}
