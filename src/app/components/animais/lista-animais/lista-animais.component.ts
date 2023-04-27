import { switchMap } from 'rxjs';
import { AnimaisService } from './../services/animais.service';
import { Animais } from './../models/animais';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../autenticacao/services/usuario/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  animais!: Animais;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.retornaUsuario();
  }

  private retornaUsuario() {
    this.activatedRoute.params.subscribe((params) => {
      this.animais = this.activatedRoute.snapshot.data['animais'];
    });
  }
}
