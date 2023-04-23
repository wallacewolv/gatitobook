import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, switchMap, tap } from 'rxjs';

import { Comentarios } from './models/comentarios';
import { ComentariosService } from './services/comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  @Input() id!: number;
  comentarios$!: Observable<Comentarios>;
  comentarioform!: FormGroup;

  constructor(
    private comentariosService: ComentariosService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buscarComentario();
    this.incicializarComentarioForm();
  }

  buscarComentario() {
    this.comentarios$ = this.comentariosService.buscaComentario(this.id);
  }

  incicializarComentarioForm() {
    this.comentarioform = this.formBuilder.group({
      comentario: ['', Validators.maxLength(300)],
    })
  }

  gravar() {
    debugger
    const comentario = this.comentarioform.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentariosService.incluiComentario(
      this.id, comentario)
      .pipe(
        switchMap(() => this.comentariosService.buscaComentario(this.id)),
        tap(() => {
          // Usando o tap para efeitos colatarais,
          // não afetam o fluxo mas precisam acontecer, Ex: resetar o form
          this.comentarioform.reset();
          alert("Salvo Comentário");
        })
      );
  }
}
